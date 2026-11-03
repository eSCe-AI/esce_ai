'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles, 
  LineChart, 
  Globe,
  MessageSquare,
  X,
  Send,
  Bot
} from 'lucide-react';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am eSCe AI Assistant. Ask me anything about our platform, features, or user guide!'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // Ref dan fungsi untuk Auto-Scroll ke bawah
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputQuery.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: inputQuery }];
    setMessages(newMessages);
    setInputQuery('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'This is currently a UI preview. My AI backend is coming soon to answer all your questions!'
        }
      ]);
    }, 600);
  };

  const handleQuickQuestion = (question: string) => {
    setInputQuery(question);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500 selection:text-white relative">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/80 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/esce_logo_sidename.png" 
              alt="eSCe AI Logo" 
              className="h-[60px] w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]" 
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link href="/" className="text-blue-400 transition-colors">Home</Link>
            <Link href="/user-guide" className="hover:text-white transition-colors">User Guide</Link>
          </nav>

          <div>
            <WalletMultiButtonDynamic className="!bg-blue-600 hover:!bg-blue-500 !rounded-xl !text-sm !font-semibold !transition-all !h-11 !px-5 shadow-lg shadow-blue-600/30" />
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Trading Companion</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Trade Smarter. <br />
              Think Deeper. <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Stay Disciplined.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed text-justify">
              Your AI-powered trading companion for understanding performance, recognizing trading patterns, and making more disciplined trading decisions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <WalletMultiButtonDynamic className="!bg-blue-600 hover:!bg-blue-500 !rounded-xl !text-base !font-semibold !h-12 !px-6 shadow-xl shadow-blue-600/30" />
              <Link 
                href="/user-guide" 
                className="px-6 py-3 rounded-xl border border-gray-700 hover:border-blue-500/50 bg-gray-900/50 text-gray-300 hover:text-white font-semibold transition-all flex items-center justify-center"
              >
                Explore User Guide
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative rounded-2xl border border-blue-900/40 bg-gray-900/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">eSCe Terminal v1.0</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-950/60 border border-blue-950/80 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Portfolio Overview</p>
                    <p className="text-2xl font-bold text-white font-mono">$ --,---.--</p>
                  </div>
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20 font-semibold">--.- % (1 Week)</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-gray-950/60 border border-blue-950/80">
                    <p className="text-xs text-gray-400">Win Rate</p>
                    <p className="text-lg font-bold text-white">--.- %</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-950/60 border border-blue-950/80">
                    <p className="text-xs text-gray-400">AI Risk Guard</p>
                    <p className="text-lg font-bold text-blue-400">Optimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE FEATURES */}
      <section className="py-24 border-t border-blue-950/60 bg-gray-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400">Core Features</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Everything You Need for Smarter Trading</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: LineChart, title: "Trading Analytics", desc: "Understand your trading performance with granular statistical breakdowns." },
              { icon: BrainCircuit, title: "Behavioral Analysis", desc: "Recognize your trading habits and emotional patterns in real-time." },
              { icon: Sparkles, title: "AI Companion", desc: "Get intelligent, non-hallucinatory trading insights powered by robust data models." },
              { icon: ShieldCheck, title: "Risk Management", desc: "Make risk-aware decisions backed by strict on-chain guardrails." },
            ].map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{feat.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed text-justify">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 border-t border-blue-950/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-950/60 to-gray-900 border border-blue-500/30 p-12 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Build Better Trading Habits with AI.</h3>
              <div className="flex justify-center">
                <WalletMultiButtonDynamic className="!bg-blue-600 hover:!bg-blue-500 !rounded-xl !text-base !font-semibold !h-12 !px-8 shadow-xl shadow-blue-600/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-blue-950/60 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="/esce_logo_sidename.png" 
              alt="eSCe AI Logo" 
              className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" 
            />
          </div>
          <p className="text-xs text-gray-500">© 2026 eSCe AI. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

{/* ========================================================= */}
      {/* 6. AI CHATBOT FRONTEND WIDGET                              */}
      {/* ========================================================= */}

      {/* Toggle Button (Gelembung Chat Melayang - Dinaikkan ke bottom-16 agar aman dari badge Netlify) */}
      <div className="fixed bottom-16 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl shadow-blue-600/50 flex items-center justify-center transition-all transform hover:scale-105"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>
      </div>

      {/* Jendela Chat Modal (Dinaikkan juga posisinya ke bottom-32) */}
      {isChatOpen && (
        <div className="fixed bottom-32 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gray-900 border border-blue-900/50 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl">
          
          {/* Header Chat */}
          <div className="p-4 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">eSCe AI Assistant</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-mono">User Guide Knowledge Base</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Chat (Daftar Pesan & Target Auto-Scroll) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-justify ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Buttons */}
          <div className="px-4 py-2 bg-gray-950/60 border-t border-gray-800/60 flex gap-2 overflow-x-auto text-xs no-scrollbar">
            <button 
              onClick={() => handleQuickQuestion("What is eSCe AI?")}
              className="px-2.5 py-1 rounded-full bg-gray-800 hover:bg-blue-950 border border-gray-700 text-gray-300 hover:text-blue-400 whitespace-nowrap transition-colors"
            >
              What is eSCe AI?
            </button>
            <button 
              onClick={() => handleQuickQuestion("How does Risk Guard work?")}
              className="px-2.5 py-1 rounded-full bg-gray-800 hover:bg-blue-950 border border-gray-700 text-gray-300 hover:text-blue-400 whitespace-nowrap transition-colors"
            >
              How does Risk Guard work?
            </button>
          </div>

          {/* Form Input Chat */}
          <form onSubmit={handleSendMessage} className="p-3 bg-gray-950 border-t border-gray-800 flex gap-2">
            <input
              type="text"
              placeholder="Ask about eSCe AI..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
