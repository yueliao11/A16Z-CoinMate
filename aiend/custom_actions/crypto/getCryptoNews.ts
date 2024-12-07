import axios from 'axios';

export default async function getCryptoNews(category: string) {
  const apiKey = process.env.CRYPTOCOMPARE_API_KEY;
  const url = `https://min-api.cryptocompare.com/data/v2/news/?categories=${category}`;

  try {
    const response = await axios.get(url, {
      headers: { 'authorization': `Apikey ${apiKey}` }
    });

    return response.data.Data.map((item: any) => ({
      title: item.title,
      url: item.url,
      source: item.source,
      publishedAt: item.published_on
    }));
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    throw error;
  }
}

export { default as getCryptoNews } from './getCryptoNews';
