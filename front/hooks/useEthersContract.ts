"use client";

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { CONTRACTS } from '@/config/contracts';
import { useToast } from '@/hooks/use-toast';
import { AIA_NETWORK } from '@/lib/constants';

export function useEthersContract() {
  const [address, setAddress] = useState<string | null>(null);
  const [unlockingAdvisor, setUnlockingAdvisor] = useState<string | null>(null);
  const [unlockedAdvisors, setUnlockedAdvisors] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function init() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setAddress(accounts[0] || null);

          window.ethereum.on('accountsChanged', (newAccounts: string[]) => {
            setAddress(newAccounts[0] || null);
          });
        } catch (error) {
          console.error('Failed to get accounts:', error);
        }
      }
    }

    init();

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, []);

  const checkAccess = async (advisorType: string) => {
    if (!address || !window.ethereum) return false;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        "0x4b2f2583B3730820D0A8F2076e3a90Af26872B99",
        [
          "function purchaseConsultation() external payable",
          "function checkAccess(address user) external view returns (bool)",
          "function stake() external payable",
          "function unstake(uint256 amount) external"
        ],
        provider
      );
      
      const hasAccess = await contract.checkAccess(address);
      if (hasAccess) {
        setUnlockedAdvisors(prev => [...new Set([...prev, advisorType])]);
      }
      return hasAccess;
    } catch (error) {
      console.error('Error checking access:', error);
      return false;
    }
  };

  const unlockAdvisor = async (advisorType: string) => {
    if (!address) {
      toast({
        title: "错误",
        description: "请先连接钱包",
        variant: "destructive",
      });
      return;
    }

    try {
      setUnlockingAdvisor(advisorType);
      setUnlockedAdvisors(prev => [...new Set([...prev, advisorType])]);
      setUnlockingAdvisor(null);
      
      toast({
        title: "成功",
        description: "顾问已准备就绪",
      });
      
      return true;
    } catch (error) {
      console.error('Unlock failed:', error);
      setUnlockingAdvisor(null);
      throw error;
    }
  };

  return {
    address,
    unlockAdvisor,
    unlockingAdvisor,
    checkAccess,
    unlockedAdvisors,
  };
} 