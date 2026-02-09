import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const Enterprise = () => (
    <section className="py-32 px-6 bg-[#0E1A2B] text-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto z-10 relative">
            <ShieldCheck className="w-16 h-16 text-[#C9A227] mx-auto mb-10 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-[1.2]">
                當對話成為可被計算的資產，<br />團隊將不再依賴個人天賦。
            </h2>
            <button className="group flex items-center gap-4 mx-auto text-[#C9A227] hover:text-[#F5D76E] transition-all text-[11px] font-bold tracking-[0.5em] uppercase border-b border-[#C9A227]/20 pb-2 cursor-pointer">
                聯繫企業專屬顧問 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
    </section>
);
