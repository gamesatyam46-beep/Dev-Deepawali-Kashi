import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for virtual diyas offered by visitors
interface DiyaRecord {
  id: string;
  name: string;
  location: string;
  sankalp: string;
  diyaType: string;
  timestamp: string;
  flowerColor: string;
}

const communityDiyas: DiyaRecord[] = [
  {
    id: "diya-1",
    name: "Acharya Raghavan",
    location: "Varanasi, India",
    sankalp: "Peace and prosperity for all devotees across the world. Har Har Mahadev!",
    diyaType: "gold",
    timestamp: "Just now",
    flowerColor: "marigold"
  },
  {
    id: "diya-2",
    name: "Sunita & Vikram Sharma",
    location: "London, UK",
    sankalp: "Prayers for good health of our parents and wisdom for our children on Kartik Purnima.",
    diyaType: "brass",
    timestamp: "10 mins ago",
    flowerColor: "rose"
  },
  {
    id: "diya-3",
    name: "Elena Rostova",
    location: "Vienna, Austria",
    sankalp: "Deep reverence to sacred Mother Ganga. May light conquer all darkness.",
    diyaType: "earthen",
    timestamp: "25 mins ago",
    flowerColor: "lotus"
  },
  {
    id: "diya-4",
    name: "Rajeshwar Verma",
    location: "New Delhi, India",
    sankalp: "Salutations to Lord Shiva on Tripurari Purnima. Shubh Dev Deepawali.",
    diyaType: "gold",
    timestamp: "1 hour ago",
    flowerColor: "marigold"
  }
];

// In-memory store for bookings
const reservations: any[] = [];

// API: Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API: Get community diyas
app.get("/api/diyas", (req, res) => {
  res.json({ diyas: communityDiyas });
});

// API: Light and float a new diya
app.post("/api/diyas", (req, res) => {
  const { name, location, sankalp, diyaType, flowerColor } = req.body;
  if (!name || !sankalp) {
    return res.status(400).json({ error: "Name and Sankalp prayer are required" });
  }

  const newDiya: DiyaRecord = {
    id: `diya-${Date.now()}`,
    name: name.trim(),
    location: (location || "Global Pilgrim").trim(),
    sankalp: sankalp.trim(),
    diyaType: diyaType || "earthen",
    timestamp: "Just now",
    flowerColor: flowerColor || "marigold"
  };

  communityDiyas.unshift(newDiya);
  if (communityDiyas.length > 50) {
    communityDiyas.pop();
  }

  res.status(201).json({ success: true, diya: newDiya, totalCount: communityDiyas.length + 104280 });
});

// API: Create a luxury cruise booking
app.post("/api/bookings", (req, res) => {
  const booking = req.body;
  if (!booking.tierId || !booking.guestName || !booking.email) {
    return res.status(400).json({ error: "Missing required booking details" });
  }

  const bookingRef = `KASHI-DD26-${Math.floor(100000 + Math.random() * 900000)}`;
  const confirmedBooking = {
    ...booking,
    bookingRef,
    createdAt: new Date().toISOString(),
    status: "Confirmed",
    qrPayload: `DEV-DEEPAWALI-2026|${bookingRef}|${booking.guestName}|${booking.tierId}|24-NOV-2026`
  };

  reservations.push(confirmedBooking);
  res.status(201).json({ success: true, booking: confirmedBooking });
});

// API: Gemini AI Spiritual Concierge & Kashi Guide
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Intelligent fallback response if API key is not yet set
    const fallbackReply = generateFallbackResponse(message);
    return res.json({ reply: fallbackReply });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are "Acharya Vidyadhar", the premier Spiritual & Cultural Concierge for the 'Dev Deepawali 2026 - Kashi Luxury Experience' on the sacred Ganges in Varanasi (Kashi).
You speak with serene grace, deep scholarly wisdom of ancient Vedic traditions, and warm luxury hospitality.
Key Knowledge:
- Dev Deepawali is celebrated on Kartik Purnima (November 24, 2026).
- Legend: It marks Lord Shiva's victory over the demon Tripurasura (hence Tripurari Purnima). The Gods (Devas) descend to bathe in the holy Ganga and light lamps across all 84 ghats.
- Key highlights of our Luxury Experience: 360° open-deck cruise, front-row anchoring at Dashashwamedh Ghat for the 21-priest Maha Aarti, 3D laser mapping on Chet Singh Fort, Vedic drone & fireworks show, gourmet sattvic Banarasi dinner, live sitar/shehnai music.
- Answer user queries about dress code (modest, elegant traditional or smart casuals), ghats history (Assi to Namo), Kashi Vishwanath temple darshan advice, best photography tips, cruise boarding at Ravidas Ghat, and the spiritual significance of lighting diyas.
- Keep answers concise, immersive, respectful, and helpful. Include Sanskrit blessings like "हर हर महादेव" or "शुभम् भवतु" where appropriate.`;

    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((h: any) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text || h.content || "" }]
        }))
      : [];

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
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const fallbackReply = generateFallbackResponse(message);
    res.json({ reply: fallbackReply });
  }
});

function generateFallbackResponse(userQuery: string): string {
  const query = userQuery.toLowerCase();
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

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dev Deepawali 2026 Server running on http://localhost:${PORT}`);
  });
}

startServer();
