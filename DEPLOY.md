# 🚀 Vercel pe Deploy Karo — Step by Step

## 📁 Project Structure
```
trendpulse-vercel/
├── api/
│   └── chat.js          ← Backend (API key yahan safe hai)
├── public/
│   ├── index.html       ← TrendPulse news site
│   └── reels.html       ← ReelAI generator
├── package.json
└── vercel.json
```

---

## ✅ STEP 1: GitHub pe upload karo

1. **github.com** pe jaao → New repository → `trendpulse` naam do
2. Ye poora folder upload karo (drag & drop)
3. Commit karo

---

## ✅ STEP 2: Vercel pe deploy karo

1. **vercel.com** pe jaao → Free account banao (GitHub se login karo)
2. "Add New Project" → GitHub repo select karo → `trendpulse`
3. **Import** karo — Vercel automatically detect kar lega
4. "Deploy" dabao → 2 minute mein live! 🎉

---

## ✅ STEP 3: API Key safely add karo (MOST IMPORTANT)

Deploy hone ke baad:

1. Vercel Dashboard → Apna project → **Settings**
2. Left sidebar → **Environment Variables**
3. Add karo (do alag variables):
   - **Name:** `OPENROUTER_API_KEY` | **Value:** `sk-or-v1-...` (backup key)
   - **Name:** `GROQ_API_KEY` | **Value:** `gsk_...` (Groq key — fast text generation)
   - **Environment:** Production + Preview + Development (teeno check karo)
4. **Save** karo
5. **Redeploy** karo — Settings → Deployments → Redeploy

---

## ✅ STEP 4: Test karo

- `https://trendpulse.vercel.app` → News site
- `https://trendpulse.vercel.app/reels.html` → ReelAI

**API key kisi ko nahi dikhegi — sirf server pe hai!** 🔒

---

## 💰 AdSense add karo

`public/index.html` mein ye comments hain — wahan actual AdSense code lagao:
```
<!-- ✅ ADSENSE: ca-pub-XXXXXXXX -->
```

---

## 🔑 Anthropic API Key kahan se milegi?

1. **console.anthropic.com** pe jaao
2. Free account banao
3. API Keys → Create Key
4. Copy karo → Vercel environment variable mein paste karo

**Free tier mein $5 credit milta hai — kaafi hai shuru karne ke liye!**

---

## ❓ Koi problem aaye toh

- Vercel logs: Dashboard → Project → Functions tab → chat.js
- Error dikhega wahan




## anthropic key 
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
