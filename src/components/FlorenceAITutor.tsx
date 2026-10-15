"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, GraduationCap, ShieldAlert } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  source?: string;
  timestamp: string;
}

export const FlorenceAITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m-welcome",
      sender: "ai",
      text: "Hello! I am Florence, your nursing study and exam preparation tutor. I can help you master clinical dosage calculations, pharmacology mechanisms, US ↔ Commonwealth drug names, and NextGen NCLEX clinical judgment rationales.\n\n*(Note: Under our editorial charter, I am a study tutor only. I do not answer questions about registration pathways, visas, timelines, fees, or evaluate individual eligibility.)*",
      source: "Grounded Study Corpus",
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
        text: data.response || "I could not retrieve a study rationale at this moment.",
        source: data.source === "editorial_refusal_boundary" ? "Editorial Refusal Policy" : "Grounded Study Corpus",
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
          text: "Network error connecting to study tutor. Please check your connection and try again.",
          timestamp: "Just now"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const highYieldChips = [
    { label: "🧮 Dosage: IV Drip Rate (gtt/min) formula", query: "dosage dimensional analysis formula drip rate" },
    { label: "💊 ACE Inhibitors vs ARBs mechanism & cough", query: "ace inhibitors vs arbs cough mechanism" },
    { label: "🇦🇺 US vs Commonwealth drug names (Paracetamol vs Acetaminophen)", query: "paracetamol vs acetaminophen commonwealth us drug names" },
    { label: "💉 Anticoagulant reversals (Heparin & Warfarin antidotes)", query: "heparin warfarin antidote reversal protamine vitamin k" },
    { label: "🧠 NextGen NCLEX: The 6 steps of CJMM", query: "nextgen nclex cjmm clinical judgment steps" }
  ];

  return (
    <div className="space-y-6 font-sans">
      {/* Header */}
      <div className="border-b border-line pb-5 space-y-2">
        <div className="flex items-center gap-2 text-eyebrow text-accent font-bold uppercase tracking-eyebrow">
          <GraduationCap className="w-4 h-4" />
          <span>Study &amp; Examination Tutor</span>
        </div>
        <h1 className="font-serif text-display-md text-ink font-normal tracking-tight">
          Florence AI Study Tutor
        </h1>
        <p className="text-body-sm text-ink-70 max-w-lead leading-relaxed">
          Ungated clinical math, pharmacology mechanisms, drug nomenclature, and NextGen NCLEX rationales for international nurses.
        </p>
      </div>

      {/* Editorial Boundary Banner */}
      <div className="bg-caution-wash border border-caution-border rounded-lg p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-caution shrink-0 mt-0.5" />
        <div className="text-meta-sm text-ink-70 leading-relaxed">
          <strong className="text-ink font-semibold block">Study tutor only:</strong>
          Florence contains no regulatory, visa, or licensing data. Florence will decline questions regarding registration pathways, fees, timelines, and will never evaluate your personal eligibility. For official pathways, visit our <a href="/compare" className="text-accent underline font-medium">Destination Comparison Table</a>.
        </div>
      </div>

      {/* One-Click High-Yield Study Topics */}
      <div className="space-y-2">
        <span className="text-label text-ink-60 uppercase tracking-label block">
          One-Click Study Questions:
        </span>
        <div className="flex flex-wrap gap-2">
          {highYieldChips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(chip.query)}
              disabled={isLoading}
              className="text-meta-sm px-3 py-1.5 rounded-full border border-line bg-surface hover:border-accent hover:text-accent text-ink-70 transition-colors font-medium text-left"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Card */}
      <div className="bg-surface border border-line rounded-lg shadow-sm flex flex-col h-[560px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-body-sm">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 max-w-2xl ${
                m.sender === "user" ? "ml-auto justify-end" : "mr-auto"
              }`}
            >
              {m.sender === "ai" && (
                <div className="w-7 h-7 rounded-full bg-accent-wash text-accent flex items-center justify-center font-serif font-bold text-body-sm shrink-0 border border-accent/20">
                  F
                </div>
              )}

              <div
                className={`p-4 rounded-lg leading-relaxed whitespace-pre-wrap ${
                  m.sender === "user"
                    ? "bg-accent text-white rounded-br-none"
                    : "bg-paper-alt border border-line text-ink rounded-bl-none"
                }`}
              >
                {m.text}
                {m.source && (
                  <div
                    className={`mt-2.5 pt-2 text-meta-sm font-mono border-t ${
                      m.sender === "user"
                        ? "border-white/20 text-white/70"
                        : "border-line text-ink-40"
                    }`}
                  >
                    Source: {m.source}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-ink-60 text-meta-sm italic p-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Florence is generating study rationale...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 border-t border-line bg-paper flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a study question (e.g. Paracetamol vs Acetaminophen, IV drip rate)..."
            disabled={isLoading}
            className="flex-1 px-3.5 py-2.5 rounded border border-line bg-surface text-ink text-body-sm focus:outline-accent min-h-control"
          />
          <button
            type="button"
            onClick={() => handleSend()}
            disabled={isLoading || !inputQuery.trim()}
            className="px-4 py-2.5 rounded bg-accent text-white hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-body-sm transition-colors min-h-control flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Ask</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
