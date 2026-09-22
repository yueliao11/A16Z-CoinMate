# CoinMate - AI-Powered Crypto Advisory Platform

基于 Eliza 框架打造的智能加密货币投资顾问系统,为用户提供专业的投资建议和市场分析。

## 项目架构

项目分为两个主要部分:

### 1. AI 后端 (aiend)

基于 Eliza 框架实现的 AI 代理系统:

- 使用 LLaMA 模型进行对话生成
- 集成 CryptoCompare API 获取实时市场数据
- 自定义加密货币分析插件
- 支持中文对话



### 2. Web 前端 (front)

基于 Next.js 的现代化 Web 应用:

- 完整的钱包集成(支持 MetaMask)
- 实时加密货币价格和图表
- DeFi 协议分析和推荐
- MEME 代币市场情绪分析
- 多语言支持(中英文)




## 主要功能

- 💰 实时加密货币价格追踪
- 📊 DeFi 协议分析和收益率比较
- 🤖 AI 驱动的投资建议
- 🎯 MEME 代币市场情绪分析
- 📈 投资组合管理
- 🔒 安全的钱包集成

## 技术栈

- AI: Eliza Framework, LLaMA
- Frontend: Next.js, TypeScript, TailwindCSS
- Web3: ethers.js, wagmi
- APIs: CryptoCompare, DefiLlama

## 环境要求

- Node.js >= 16
- pnpm
- MetaMask 钱包



## Project Overview

CoinMate is an intelligent cryptocurrency advisory platform that combines the power of AI with comprehensive crypto market insights. The project consists of two main components:

- **Frontend**: A modern Next.js web application
- **AI Backend**: Powered by the A16Z Eliza framework for intelligent crypto consulting

## Project Structure

```
A16Z-CoinMate/
├── front/          # Next.js frontend application
└── aiend/          # Eliza-based AI backend
```

## Setup Instructions

### AI Backend Setup

1. **Clone Eliza Repository**
   ```bash
   git clone https://github.com/ai16z/eliza.git
   cd eliza
   ```

2. **Switch to Stable Version**
   ```bash
   git checkout v0.0.10
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Build Libraries**
   ```bash
   pnpm build
   ```

5. **Configure Environment**
   ```bash
   cp .env.example .env
   ```

6. **Start AI Service**
   ```bash
   pnpm start --character="characters/crypto_advisor.json" -v
   ```

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd front
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm run dev
   ```

## Features

- Real-time cryptocurrency market analysis
- AI-powered investment advice
- Interactive user interface
- Personalized crypto portfolio recommendations
- Market trend analysis and predictions

## Technology Stack

- **Frontend**: Next.js, React
- **AI Backend**: A16Z Eliza Framework
- **Package Manager**: pnpm

## Contributing

Feel free to submit issues and enhancement requests.

## License

[Add your license information here]

## ⚡ Related AI Infrastructure & Rate Limit Observability

When orchestrating autonomous Eliza agents and LLM backends, managing upstream model quotas and rate limit cooldowns ensures uninterrupted operation:
- **[Codex Reset Status](https://codexresetstatus.com/)**: Real-time quota radar, rate limit countdown clocks, and global reset tracker for OpenAI models.
  - [5-Hour Limit Reset Countdown](https://codexresetstatus.com/codex/5-hour-limit)
  - [Global Timezone Reset Table](https://codexresetstatus.com/codex/reset-time)
  - [Codex Usage & Quota Calculator](https://codexresetstatus.com/calculator)
