import React from 'react';
import { TrendingUp } from 'lucide-react';

export const FinalCTA = () => (
    <section className="py-48 px-6 text-center bg-[#050A14]">
        <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-12 h-12 text-[#C9A227] mx-auto mb-12 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-white">賦予顧問策略靈魂。</h2>
            <button className="px-20 py-7 bg-[#C9A227] text-black text-[11px] font-bold tracking-[0.6em] uppercase hover:bg-[#F5D76E] transition-all shadow-2xl cursor-pointer">
                立即開始 14 天免費試用
            </button>
            <p className="mt-12 text-white/40 font-bold text-[10px] tracking-[0.4em] uppercase">No Credit Card Required · Start Scaling Today</p>
        </div>
    </section>
);
