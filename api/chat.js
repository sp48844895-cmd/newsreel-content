// api/chat.js — Vercel Serverless Function
// Ye file API key ko safely server pe rakhti hai

export default async function handler(req, res) {
  // CORS headers — frontend se request allow karo
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS preflight
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages, max_tokens = 1000, system } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array required' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens,
        messages: system
          ? [{ role: 'system', content: system }, ...messages]
          : messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API Error' });
    }

    const normalized = {
      content: [{ text: data.choices[0].message.content }]
    };

    return res.status(200).json(normalized);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
