import { getCryptoPrice } from "./getCryptoPrice";
import { getCryptoNews } from "./getCryptoNews";
import { LlamaService } from "../../services/llama";

const llm = new LlamaService();

export async function analyzeCrypto(symbol: string) {
    const price = await getCryptoPrice(symbol);
    const news = await getCryptoNews(symbol);

    const analysis = await llm.complete({
        messages: [
            {
                role: "system",
                content: `作为加密货币分析师，请分析以下数据并给出投资建议：
价格数据：${JSON.stringify(price)}
相关新闻：${JSON.stringify(news)}`,
            },
        ],
    });

    return analysis;
}

export { analyzeCrypto } from "./analyzeCrypto";
