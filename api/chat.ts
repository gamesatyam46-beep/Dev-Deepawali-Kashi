import { GoogleGenAI } from "@google/genai";

function generateFallbackResponse(userQuery: string): string {
  const query = (userQuery || "").toLowerCase();
  if (query.includes("time") || query.includes("date") || query.includes("schedule")) {
    return "🙏 **Har Har Mahadev!** Dev Deepawali 2026 takes place on the sacred night of **Kartik Purnima, November 24, 2026**. Boarding commences at 4:30 PM from Ravidas Ghat, with the grand lighting of 1 million diyas at 5:30 PM, the 21-Priest Maha Aarti at 7:00 PM, and laser & drone spectacle at 8:00 PM.";
  }
  if (query.includes("dress") || query.includes("wear") || query.includes("clothes")) {
    return "✨ **Attire Guidance:** For this divine evening, we recommend elegant Indian ethnic wear (such as Kurta-Pajama or Silk Sarees/Salwars) or smart semi-formal attire. November evenings on the river Ganges can be pleasantly cool with a gentle breeze, so carrying a light pashmina shawl or jacket is recommended.";
  }
  if (query.includes("food") || query.includes("dinner") || query.includes("menu") || query.includes("veg")) {
    return "🪔 **Gourmet Sattvic Feast:** Our royal cruise features an authentic 5-course Banarasi & Awadhi vegetarian banquet crafted without onion or garlic, including Banarasi Tamatar Chaat, Subz Biryani, Paneer Lababdar, hot Malaiyo, and traditional Banarasi Paan & Thandai.";
  }
  if (query.includes("aarti") || query.includes("dashashwamedh")) {
    return "🕉️ **Maha Ganga Aarti:** On Dev Deepawali, the Maha Aarti at Dashashwamedh Ghat is performed simultaneously by 21 Vedic priests chanting resonant shlokas while holding towering flaming brass lamps. Our cruise is granted exclusive VIP anchoring directly in front of the sanctum for unobstructed 360° sightlines.";
  }
  return "🙏 **Namaskar & Har Har Mahadev!** Welcome to Dev Deepawali 2026 in sacred Kashi. On this auspicious Kartik Purnima night (Nov 24, 2026), all 84 ghats transform into a celestial stairway of 1 million earthen lamps. I am here to guide you with cruise details, ghat histories, temple darshan, and ritual customs. How may I serve your spiritual voyage?";
}

export default async function handler(req: any, res: any) {
  // Support CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const fallbackReply = generateFallbackResponse(message);
    return res.status(200).json({ reply: fallbackReply });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are "Acharya Vidyadhar", the premier Spiritual & Cultural Concierge for the 'Dev Deepawali 2026 - Kashi Luxury Experience' on the sacred Ganges in Varanasi (Kashi).
You speak with serene grace, deep scholarly wisdom of ancient Vedic traditions, and warm luxury hospitality.
Key Knowledge:
- Dev Deepawali is celebrated on Kartik Purnima (November 24, 2026).
- Legend: It marks Lord Shiva's victory over the demon Tripurasura (hence Tripurari Purnima). The Gods (Devas) descend to bathe in the holy Ganga and light lamps across all 84 ghats.
- Key highlights of our Luxury Experience: 360° open-deck cruise, front-row anchoring at Dashashwamedh Ghat for the 21-priest Maha Aarti, 3D laser mapping on Chet Singh Fort, Vedic drone & fireworks show, gourmet sattvic Banarasi dinner, live sitar/shehnai music.
- Answer user queries about dress code, ghats history, Kashi Vishwanath temple darshan advice, best photography tips, cruise boarding at Ravidas Ghat, and the spiritual significance of lighting diyas.
- Keep answers concise, immersive, respectful, and helpful. Include Sanskrit blessings like "हर हर महादेव" or "शुभम् भवतु" where appropriate.`;

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 600,
      }
    });

    const response = await chat.sendMessage({
      message: message
    });

    const replyText = response.text || "May Lord Shiva and Mother Ganga shower you with auspicious light. How may I further assist your journey to Kashi for Dev Deepawali 2026?";
    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error in Vercel function:", error);
    const fallbackReply = generateFallbackResponse(message);
    return res.status(200).json({ reply: fallbackReply });
  }
}
