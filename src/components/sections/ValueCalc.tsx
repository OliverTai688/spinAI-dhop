"use client";

import React, { useState } from 'react';
import { Plus, Minus, TrendingUp, Clock, Zap } from 'lucide-react';

export const ValueCalc = () => {
    const [chats, setChats] = useState(20);

    // Logic: Each chat takes 1.5 hours manually vs 0.5 hour with AI.
    // Hourly rate assumed as NT$2,000 for a consultant.
    const timeSaved = chats * 1.0;
    const moneySaved = timeSaved * 2000;

    return (
        <section className="py-32 px-6 bg-[#0E1A2B] relative overflow-hidden">
            <div className="max-w-4xl mx-auto bg-[#152238] border border-white/10 p-12 rounded-2xl shadow-2xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#C9A227] mb-6">價值回報計算 — ROI Calculator</h2>
                    <h3 className="text-3xl font-bold text-white tracking-tight">計算您的策略投資回報</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-10">
                            <label className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-6 block">您的每月平均對話量</label>
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={() => setChats(Math.max(1, chats - 5))}
                                    className="p-4 bg-white/5 hover:bg-[#C9A227] hover:text-black text-white transition-all rounded-full"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-5xl font-bold text-white w-24 text-center tracking-tighter">{chats}</span>
                                <button
                                    onClick={() => setChats(chats + 5)}
                                    className="p-4 bg-white/5 hover:bg-[#C9A227] hover:text-black text-white transition-all rounded-full"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <p className="text-white/40 text-[11px] leading-relaxed">
                            * 註：系統將根據對話數量，自動計算透過 AI 提取關鍵策略、產出訪談報告與後續跟進建議所節省的標準工時。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-8 bg-[#050A14] border border-[#C9A227]/20 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Clock className="w-12 h-12 text-[#C9A227]" />
                            </div>
                            <div className="relative">
                                <div className="text-[#C9A227] text-[10px] font-bold tracking-widest mb-2 uppercase">預計節省工時</div>
                                <div className="text-white text-3xl font-bold tracking-tighter">每月 {timeSaved} 小時</div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#C9A227] rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-black">
                                <TrendingUp className="w-12 h-12" />
                            </div>
                            <div className="relative">
                                <div className="text-black/60 text-[10px] font-bold tracking-widest mb-2 uppercase">隱形產值釋放</div>
                                <div className="text-black text-3xl font-bold tracking-tighter">約 NT${moneySaved.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center">
                    <p className="text-white/50 text-xs italic">
                        「當您的時間更專注於高價值決策，而非行政庶務，成交額將隨之倍增。」
                    </p>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};
