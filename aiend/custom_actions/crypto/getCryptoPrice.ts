import axios from 'axios';

export default async function getCryptoPrice(symbol: string) {
  const apiKey = process.env.CRYPTOCOMPARE_API_KEY;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD`;

  try {
    const response = await axios.get(url, {
      headers: { 'authorization': `Apikey ${apiKey}` }
    });

    const data = response.data.RAW[symbol].USD;
    return {
      price: data.PRICE,
      change24h: data.CHANGEPCT24HOUR,
      volume24h: data.VOLUME24HOUR,
      marketCap: data.MKTCAP
    };
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    throw error;
  }
}

export { default as getCryptoPrice } from './getCryptoPrice';
