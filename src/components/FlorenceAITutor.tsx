"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, BookOpen, ShieldCheck } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  source?: string;
  cost?: string;
  timestamp: string;
}

export const FlorenceAITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m-welcome",
      sender: "ai",
      text: "Hello! I am Florence AI, your 24/7 international nursing study tutor. I am grounded directly in verified AHPRA protocols, NextGen NCLEX standards, and pharmacology differences between Australia, the US, and the UK. What can I help you study today?",
      source: "Grounded StudyNursing Knowledge Base",
      cost: "$0.00",
      timestamp: "Just now"
    }
  ]);
  const [inputQuery, setInputQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: data.response || "I could not retrieve an answer at this moment.",
        source: data.source === "grounded_knowledge_base" ? "Verified Web Content ($0.00)" : "Clinical Tutor Engine",
        cost: data.cost || "$0.00",
        timestamp: "Just now"
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: "err-" + Date.now(),
          sender: "ai",
          text: "Network error connecting to tutor service. Please try again.",
          timestamp: "Just now"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const highYieldChips = [
    { label: "🇦🇺 AU vs 🇺🇸 US drug names (Paracetamol vs Acetaminophen)", query: "au vs us drug names paracetamol" },
    { label: "💊 ACE Inhibitors vs ARBs mnemonics", query: "ace inhibitors vs arbs mnemonics" },
    { label: "🌏 AHPRA OBA vs NCLEX overview", query: "ahpra oba osce australia overview" },
    { label: "🧮 Dimensional Analysis golden rules", query: "dosage dimensional analysis formula" }
  ];

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <Bot className="w-3.5 h-3.5" />
            <span>24/7 Clinical & Academic Assistant</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Florence AI Clinical Tutor
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Zero-hallucination assistant grounded directly in your study guides, pharmacology cards, and overseas pathways.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-500/20 px-3.5 py-1.5 rounded-xl text-xs text-teal-800 dark:text-teal-300">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Grounded in StudyNursing Guides • Cost: $0.00/query</span>
        </div>
      </div>

      {/* High-Yield One-Click Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          One-Click High-Yield Questions:
        </span>
        <div className="flex flex-wrap gap-2">
          {highYieldChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip.query)}
              disabled={isLoading}
              className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 text-slate-700 dark:text-slate-300 transition-all font-medium active:scale-95 text-left"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col h-[560px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 max-w-2xl ${
                m.sender === "user" ? "ml-auto justify-end" : "mr-auto"
              }`}
            >
              {m.sender === "ai" && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  F
                </div>
              )}

              <div
                className={`p-4 rounded-2xl space-y-2 leading-relaxed shadow-sm ${
                  m.sender === "user"
                    ? "bg-emerald-600 text-white rounded-tr-none font-medium"
                    : "bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none"
                }`}
              >
                {/* Message Header */}
                <div className="flex items-center justify-between text-[12px] opacity-80 gap-4">
                  <span className="font-bold">
                    {m.sender === "user" ? "You" : "Florence AI Tutor"}
                  </span>
                  <span>{m.timestamp}</span>
                </div>

                {/* Content */}
                <div className="whitespace-pre-line leading-relaxed font-sans text-xs">
                  {m.text}
                </div>

                {/* Source attribution tag */}
                {m.source && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[12px] text-teal-700 dark:text-teal-300">
                    <span className="flex items-center gap-1 font-semibold">
                      <BookOpen className="w-3 h-3" />
                      {m.source}
                    </span>
                    <span className="font-mono bg-teal-100 dark:bg-teal-900/60 px-1.5 py-0.5 rounded text-[12px]">
                      Query Cost: {m.cost}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 max-w-xl">
              <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0 animate-pulse">
                F
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none text-xs text-slate-500 animate-pulse flex items-center gap-2">
                <span>Retrieving clinical guidelines and rationales...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 rounded-b-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about Australian AHPRA vs US NCLEX, drug mechanisms, or dimensional analysis..."
              disabled={isLoading}
              className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
