import { GoogleGenAI } from "@google/genai";

function generateFallbackResponse(userQuery: string): string {
  const query = (userQuery || "").toLowerCase();
  if (query.includes("time") || query.includes("date") || query.includes("schedule")) {
    return "🙏 **Har Har Mahadev!** Dev Deepawali 2026 takes place on the sacred night of **Kartik Purnima, November 24, 2026**. Boarding commences at 4:30 PM from Ravidas Ghat VIP Jetty, with the crescent cruise of 84 ghats at 5:30 PM, the 21-Priest Maha Aarti at 7:00 PM, 3D laser show at 8:00 PM, and Sky Lantern release at 8:45 PM.";
  }
  if (query.includes("dress") || query.includes("wear") || query.includes("clothes")) {
    return "✨ **Attire Guidance:** For this divine evening, we recommend elegant Indian traditional attire (such as Kurta-Pajama or Sarees/Salwars) or smart semi-formal evening wear. River breezes in late November are pleasantly cool (18°C–22°C), so bringing a light shawl or jacket is recommended.";
  }
  if (query.includes("food") || query.includes("dinner") || query.includes("menu") || query.includes("eat")) {
    return "🪔 **Inclusions Information:** Please note that dinner is not included in the boat/cruise passes. All passes include our 5 sacred offerings: 1. Welcome Entry (शाही स्वागत), 2. Sacred Flower Diya for Ganga Arpan, 3. 1 Bottle Packaged Mineral Water per person, 4. Glowing Sky Lantern (आकाश दीप), and 5. Blessed Sacred Memento at farewell.";
  }
  if (query.includes("price") || query.includes("cost") || query.includes("package") || query.includes("tier")) {
    return "⛴️ **Boat & Cruise Options for Nov 24, 2026:**\n1. **Chhoti Motor Boat**: ₹4,999 per person\n2. **Double Decker Boat**: ₹7,999 per person (Most Popular)\n3. **Luxury Cruise**: ₹14,999 per person\n\nAll options include the 5 sacred offerings (Welcome Entry, Flower Diya, 1 Bottle Water, Sky Lantern, and Sacred Memento). Booking desk: +91 8840177339.";
  }
  if (query.includes("aarti") || query.includes("dashashwamedh")) {
    return "🕉️ **Maha Ganga Aarti:** On Dev Deepawali, the Maha Aarti at Dashashwamedh Ghat is performed by 21 Vedic priests with multi-tiered flaming brass lamps. Our vessels hold reserved stationary front-row mooring for prime viewing.";
  }
  return "🙏 **Namaskar & Har Har Mahadev!** Welcome to Dev Deepawali 2026 in sacred Kashi. We offer 3 boat options: Chhoti Motor Boat (₹4,999), Double Decker Boat (₹7,999), and Luxury Cruise (₹14,999), all featuring our 5 sacred inclusions (Welcome Entry, Flower Diya, 1 Bottle Water, Sky Lantern & Memento). How may I assist your spiritual journey?";
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
You speak with serene grace, deep scholarly wisdom of ancient Vedic traditions, and warm hospitality.
Key Knowledge:
- Dev Deepawali is celebrated on Kartik Purnima (November 24, 2026).
- Legend: It marks Lord Shiva's victory over the demon Tripurasura (hence Tripurari Purnima). The Gods (Devas) descend to bathe in the holy Ganga and light lamps across all 84 ghats.
- 3 Boat & Cruise Options:
  1. Chhoti Motor Boat: ₹4,999 per person
  2. Double Decker Boat: ₹7,999 per person
  3. Luxury Cruise: ₹14,999 per person
- 5 Guaranteed Inclusions in all passes:
  1. Welcome Entry (शाही स्वागत)
  2. Sacred Flower Diya for Ganga Arpan (पुष्प दीप)
  3. 1 Bottle Packaged Mineral Water per person (1 बोतल पानी)
  4. Glowing Sky Lantern (स्काई लैंटर्न / आकाश दीप)
  5. Consecrated Sacred Memento (पावन स्मृति चिन्ह / मोमेंटो)
- NOTE: There is NO dinner/food included.
- Other Highlights: Reserved stationary mooring at Dashashwamedh Ghat for the 21-priest Maha Aarti, 3D laser show on Chet Singh Fort, Sky Lantern release on open river.
- Official Booking WhatsApp Number: +91 8840177339.
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
