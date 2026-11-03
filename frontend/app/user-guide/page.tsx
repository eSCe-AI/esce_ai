'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  BookOpen, 
  Sparkles, 
  Wallet, 
  LineChart, 
  Cpu, 
  ChevronRight,
  Globe,
  MessageSquare,
  AlertTriangle,
  HelpCircle,
  BrainCircuit,
  ShieldAlert,
  FileText,
  X,
  Send,
  Bot
} from 'lucide-react';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function UserGuidePage() {
  const sidebarLinkClass = "block py-1.5 px-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-900/60 transition-all duration-200";

  // State untuk AI Chatbot Widget
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
          
          {/* LOGO + BRAND NAME IMAGE */}
          <div className="flex items-center">
            <img 
              src="/esce_logo_sidename.png" 
              alt="eSCe AI Logo" 
              className="h-15 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]" 
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/user-guide" className="text-blue-400 transition-colors">User Guide</Link>
          </nav>

          <div>
            <WalletMultiButtonDynamic className="!bg-blue-600 hover:!bg-blue-500 !rounded-xl !text-sm !font-semibold !transition-all !h-11 !px-5 shadow-lg shadow-blue-600/30" />
          </div>
        </div>
      </header>

      {/* 2. MAIN LAYOUT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-4 border-r border-blue-950/60 no-scrollbar">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Getting Started</span>
            </p>
            <ul className="space-y-1">
              <li><a href="#introduction" className={sidebarLinkClass}>Introduction</a></li>
              <li><a href="#connect-wallet" className={sidebarLinkClass}>Connect Wallet</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Core Features</span>
            </p>
            <ul className="space-y-1">
              <li><a href="#trading-analytics" className={sidebarLinkClass}>Trading Analytics</a></li>
              <li><a href="#behavioral-analysis" className={sidebarLinkClass}>Behavioral Analysis</a></li>
              <li><a href="#ai-companion" className={sidebarLinkClass}>AI Companion</a></li>
              <li><a href="#risk-management" className={sidebarLinkClass}>Risk Management</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Roadmap & Status</span>
            </p>
            <ul className="space-y-1">
              <li><a href="#roadmap" className={sidebarLinkClass}>Roadmap & Development</a></li>
              <li><a href="#token-status" className={sidebarLinkClass}>Token Status</a></li>
              <li><a href="#faq" className={sidebarLinkClass}>FAQ</a></li>
            </ul>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="lg:col-span-9 space-y-12">
          
          {/* HEADER */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
              <span>Docs</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-400">User Guide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">eSCe AI User Guide</h1>
            <p className="text-gray-400 text-lg text-justify">Official documentation & knowledge base for eSCe AI platform.</p>
          </div>

          {/* SECTION 1: INTRODUCTION */}
          <section id="introduction" className="space-y-4 pt-8 border-t border-blue-950/60 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span>Introduction to eSCe AI</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed text-justify">
              eSCe AI is an institutional-grade AI trading companion and Web3 analytics platform engineered to elevate trader performance, decision-making quality, and execution discipline. Built around the core mission of helping traders "Trade Smarter. Think Deeper. Stay Disciplined.", eSCe AI transforms raw on-chain data into actionable, objective intelligence.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              Instead of relying purely on technical indicators or speculative signals, eSCe AI focuses on the human element of trading—auditing historical wallet activities to identify costly behavioral flaws such as revenge trading, FOMO, overtrading, and lack of stop-loss discipline.
            </p>

            <div className="pt-2 space-y-3">
              <h3 className="text-lg font-bold text-white">Core Value Pillars</h3>
              
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Behavioral & Performance Auditing:</strong> Gain an unbiased, mirror-like evaluation of your trading patterns and risk metrics derived directly from on-chain history.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Interactive Decision Partner:</strong> Engage with your AI companion to brainstorm logic, stress-test ideas, and validate risk-reward ratios before opening new market positions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Personalized Market Sentiment & News Hub:</strong> Stay ahead with AI-curated global crypto news and market sentiment analysis—with initial deep focus on the Solana ecosystem—tailored specifically to your active portfolio and watchlist to avoid information overload.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Future Autonomous Execution Agent:</strong> In upcoming roadmap phases, eSCe AI will transition into a fully customizable autonomous agent capable of executing trades on DEX protocols according to your precise trading preferences and strict risk parameters.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 2: CONNECT WALLET */}
          <section id="connect-wallet" className="space-y-4 pt-8 border-t border-blue-950/60 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Wallet className="w-6 h-6 text-blue-400" />
              <span>Connecting Your Wallet</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              To start using eSCe AI, authentication is handled securely through industry-standard <strong>Sign-In with Solana (SIWS)</strong> using your preferred Web3 wallet (such as Phantom, Solflare, or Backpack).
            </p>

            <div className="pt-2 space-y-3">
              <h3 className="text-lg font-bold text-white">Non-Custodial & Read-Only Guarantee</h3>
              
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Read-Only Access:</strong> In the current MVP phase, connecting your wallet only grants eSCe AI permission to read public on-chain transaction history to compute your performance metrics.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Zero Private Key Exposure:</strong> eSCe AI will <strong>NEVER</strong> ask for your private keys, seed phrases, or unapproved fund transfers. Your assets remain entirely under your control.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold mt-0.5">•</span>
                  <span className="text-justify"><strong className="text-white">Non-Custodial:</strong> All keys and transaction decisions remain 100% in your hands.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed pt-2 text-justify">
              <strong>Why connect your wallet?</strong> Connecting enables eSCe AI to personalize your behavioral analytics, compute risk-to-reward metrics, and tailor market news and sentiment updates specifically to your active portfolio assets.
            </p>
          </section>

          {/* SECTION 3: CORE FEATURES */}
          <div className="space-y-8 pt-8 border-t border-blue-950/60">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-blue-400" />
              <span>Core Platform Features</span>
            </h2>

            <div className="space-y-6 text-gray-300">
              {/* Feature 1: Trading Analytics */}
              <div id="trading-analytics" className="space-y-2 scroll-mt-28">
                <div className="flex items-center space-x-3 text-blue-400">
                  <LineChart className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">1. Trading Analytics</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-8 text-justify">
                  Scans and processes historical wallet transactions to compute objective performance metrics, including Win Rate, Risk-to-Reward (R:R) Ratio, Profit Factor, and Maximum Drawdown. Designed to remove psychological bias when reviewing your own trading results.
                </p>
              </div>

              {/* Feature 2: Behavioral Analysis */}
              <div id="behavioral-analysis" className="space-y-2 scroll-mt-28 pt-2">
                <div className="flex items-center space-x-3 text-blue-400">
                  <BrainCircuit className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">2. Behavioral Analysis</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-8 text-justify">
                  Identifies human emotional execution patterns such as revenge trading after drawdowns, FOMO entries, cutting winning positions too early, or holding losing trades too long without stop-losses, acting as an objective mirror for disciplined growth.
                </p>
              </div>

              {/* Feature 3: AI Companion */}
              <div id="ai-companion" className="space-y-2 scroll-mt-28 pt-2">
                <div className="flex items-center space-x-3 text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">3. Conversational AI Companion</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-8 text-justify">
                  An interactive assistant designed specifically for this MVP phase to answer questions based on this official User Guide, platform features, and general project overviews. As our backend and AI models evolve, this companion will expand to handle deeper portfolio discussions.
                </p>
              </div>

              {/* Feature 4: Risk Management */}
              <div id="risk-management" className="space-y-2 scroll-mt-28 pt-2">
                <div className="flex items-center space-x-3 text-blue-400">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">4. Risk Management (AI Risk Guard)</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-8 text-justify">
                  Acts as your personal capital protection partner, providing suggested daily drawdown limits, position sizing guidelines, and early warnings when portfolio exposure exceeds healthy risk thresholds during market volatility.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: ROADMAP & DEVELOPMENT STATUS */}
          <section id="roadmap" className="space-y-6 pt-8 border-t border-blue-950/60 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span>Roadmap & Development Status</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-justify">
              eSCe AI is developed using a strict <strong>Product-First & Academic Research Methodology</strong>. Rather than following speculative market hype, each analytics model and risk control mechanism undergoes rigorous theoretical framing, empirical evaluation, and continuous iteration.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              Our core framework integrates behavioral finance theories to detect psychological trading flaws (such as revenge trading, overconfidence, and loss aversion). Micro-updates on feature implementations are shared periodically via official channels, while major research milestones are compiled into comprehensive progress reports.
            </p>

            {/* TOMBOL READ FULL PDF */}
            <div className="pt-2">
              <a
                href="/docs/esce_Research_Proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>Read Full Project Proposal (PDF)</span>
              </a>
            </div>

            {/* ROADMAP PHASES GRID */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">Development Phases</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Phase 1 */}
                <div className="p-5 rounded-2xl bg-gray-900/60 border border-blue-500/40 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                    IN PROGRESS
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Phase 1 (Current MVP)</span>
                  <h4 className="font-bold text-white text-base">Core Analytics & Research Framework</h4>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-start space-x-2.5">
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-justify">Read-only wallet transaction parsing</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-justify">Behavioral Analysis Engine (Revenge trading & Drawdown detection)</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-justify">AI Risk Guard & Capital Protection metrics</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-justify">Interactive User Guide AI Companion</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phase 2</span>
                  <h4 className="font-bold text-white text-base">AI & Market Sentiment Expansion</h4>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Deep portfolio discussion conversational models</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Global market sentiment scanner (Multi-chain overview with deep Solana focus)</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Personalized crypto news aggregation aligned with user active holdings</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phase 3</span>
                  <h4 className="font-bold text-white text-base">Autonomous Execution Agent</h4>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Customizable non-custodial trading preferences</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Autonomous DEX execution agent based on strict risk thresholds</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <span className="text-gray-500 font-bold mt-0.5">•</span>
                      <span className="text-justify">Academic validation report & empirical performance analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: TOKEN STATUS & SECURITY NOTICE */}
          <section id="token-status" className="space-y-4 pt-8 border-t border-blue-950/60 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-blue-400" />
              <span>Token Status</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed text-justify">
              The <strong>ESCE utility token is NOT YET RELEASED or LIVE</strong> on any decentralized or centralized exchange. Our engineering and research teams are currently 100% focused on product development and optimizing our Phase 1 MVP features.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-justify">
              Please beware of scams and unauthorized contract addresses claiming to represent $ESCE. All future token utility releases and roadmap updates will be announced exclusively through official eSCe AI communications.
            </p>
          </section>

          {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
          <section id="faq" className="space-y-6 pt-8 border-t border-blue-950/60 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              <span>Frequently Asked Questions (FAQ)</span>
            </h2>

            <div className="space-y-4 text-sm">
              <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                <h4 className="font-bold text-white">Q: Is eSCe AI an automated trading bot (auto-trader)?</h4>
                <p className="text-gray-400 leading-relaxed text-justify">
                  In the current Phase 1 MVP, no. eSCe AI is a non-custodial analytical companion focused on performance tracking and risk management advice. Autonomous DEX execution via Jupiter is planned for Phase 3 with Anchor smart contract risk guards.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                <h4 className="font-bold text-white">Q: Are there any costs to use the eSCe AI MVP?</h4>
                <p className="text-gray-400 leading-relaxed text-justify">
                  The initial MVP and User Guide AI Assistant are completely free to explore for early adopters connecting their Solana wallet.
                </p>
              </div>
            </div>
          </section>

          {/* HELP FOOTER */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-white">Have Questions for our AI?</h3>
              <p className="text-sm text-gray-400 mt-1">Try our interactive AI Assistant widget at the bottom right of the page!</p>
            </div>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
            >
              Ask AI Assistant
            </button>
          </div>

        </main>
      </div>

      {/* 3. FOOTER */}
      <footer className="border-t border-blue-950/60 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LOGO + BRAND NAME IMAGE */}
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
      {/* 4. AI CHATBOT FRONTEND WIDGET                              */}
      {/* ========================================================= */}

      {/* Toggle Button (Gelembung Chat Melayang) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl shadow-blue-600/50 flex items-center justify-center transition-all transform hover:scale-105"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>
      </div>

      {/* Jendela Chat Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gray-900 border border-blue-900/50 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl">
          
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