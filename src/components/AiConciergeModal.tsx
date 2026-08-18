import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, MessageSquare, Bot, User, RefreshCw, Compass } from 'lucide-react';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content: '🙏 **Namaskar & Har Har Mahadev!**\n\nI am **Acharya Vidyadhar**, your Spiritual & Cultural Concierge for **Dev Deepawali 2026** in sacred Kashi.\n\nWhether you need guidance on ritual traditions, cruise boarding logistics at Ravidas Ghat, dress code, temple darshan, or the sacred lore of our 84 ghats, I am honored to assist your journey. How may I serve you today?'
  }
];

const SUGGESTED_QUERIES = [
  'What is the spiritual significance of Dev Deepawali?',
  'What are the 3 package options and inclusions?',
  'What is the recommended dress code for the boat/cruise?',
  'How do we reach Ravidas Ghat through festive traffic?'
];

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: messageText.trim() };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.slice(-5),
        }),
      });

      const data = await response.json();
      const reply = data.reply || 'May Lord Shiva shower you with auspicious light. How may I further assist your journey to Kashi?';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '🙏 **Har Har Mahadev!** Dev Deepawali on Kartik Purnima (24 Nov 2026) is the night 1 million earthen lamps illuminate all 84 ghats as 33 crore Devas descend to the holy Ganga. Our luxury cruise sails from Ravidas Ghat with front-row 21-priest Maha Aarti anchoring, 5-course sattvic dining, and laser spectacles. Feel free to ask any travel question!'
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#131313] border border-[#d4af37]/60 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden flex flex-col h-[640px] max-h-[90vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1c1b1b] via-[#24211b] to-[#1c1b1b] border-b border-[#d4af37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50]/50 flex items-center justify-center font-serif text-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.3)]">
              ॐ
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#f2ca50] flex items-center gap-2">
                <span>Acharya Vidyadhar</span>
                <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#ffe088] border border-[#d4af37]/30">
                  AI Spiritual Concierge
                </span>
              </h3>
              <p className="text-xs text-[#d0c5af]">
                Kashi Heritage Scholar & Dev Deepawali Guide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#0e0e0f] border border-[#353535] flex items-center justify-center text-[#99907c] hover:text-[#e5e2e1] hover:border-[#f2ca50]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#0e0e0f]/60">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#1c1b1b] border border-[#d4af37]/40 flex items-center justify-center shrink-0 text-[#f2ca50] text-xs font-serif shadow-sm">
                  ॐ
                </div>
              )}
              <div
                className={`max-w-[82%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-medium rounded-tr-none'
                    : 'bg-[#1c1b1b] border border-[#353535] text-[#e5e2e1] rounded-tl-none shadow-md'
                }`}
              >
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50]/50 flex items-center justify-center shrink-0 text-[#f2ca50] text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#1c1b1b] border border-[#d4af37]/40 flex items-center justify-center text-[#f2ca50] text-xs font-serif animate-pulse">
                ॐ
              </div>
              <div className="p-3.5 rounded-2xl bg-[#1c1b1b] border border-[#353535] text-xs text-[#d0c5af] flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#f2ca50]" />
                <span>Acharya Vidyadhar is reflecting on sacred traditions...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        <div className="px-4 py-2 bg-[#131313] border-t border-[#353535] overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[10px] uppercase tracking-wider text-[#99907c] shrink-0">Ask:</span>
          {SUGGESTED_QUERIES.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] px-3 py-1 rounded-full bg-[#1c1b1b] hover:bg-[#d4af37]/20 border border-[#353535] text-[#d0c5af] hover:text-[#ffe088] shrink-0 transition-colors truncate max-w-[220px]"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#1c1b1b] border-t border-[#353535]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Dev Deepawali, rituals, or the cruise..."
              className="flex-1 px-4 py-2.5 rounded-full bg-[#0e0e0f] border border-[#4d4635] text-xs sm:text-sm text-[#e5e2e1] focus:border-[#d4af37] outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] flex items-center justify-center disabled:opacity-50 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
