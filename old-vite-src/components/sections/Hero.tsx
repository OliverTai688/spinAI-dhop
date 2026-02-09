import React from 'react';
import { PARTNERS } from '../../constants';
import { ArrowRight } from 'lucide-react';

export const Hero = () => (
    <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[#050A14] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/20 via-transparent to-transparent scale-150"></div>
        <div className="hero-content max-w-4xl z-10">
            <span className="hero-label block text-[#C9A227] text-[10px] font-bold tracking-[0.6em] uppercase mb-8 opacity-0">
                Professional Governance System for Consultants
            </span>
            <h1 className="hero-title text-white text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.05] opacity-0">
                誠問 AI
                <span className="block text-2xl md:text-4xl mt-6 font-light text-white/70 italic">
                    將專業對話轉化為數位策略資產
                </span>
            </h1>
            <p className="hero-sub text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0">
                首款專為高階保險顧問設計的「策略領域系統」。<br />建立結構化、可重複、可規模化的成交邏輯。
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0">
                <button className="px-12 py-5 bg-[#C9A227] hover:bg-[#F5D76E] text-black font-bold text-[11px] tracking-[0.4em] uppercase transition-all shadow-2xl shadow-[#C9A227]/20 cursor-pointer">
                    立即預約系統演示
                </button>
                <button className="group px-12 py-5 border border-white/20 text-white hover:bg-white/10 font-bold text-[11px] tracking-[0.4em] uppercase transition-all flex items-center gap-2 cursor-pointer">
                    查看方案 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 opacity-50 flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 transition-all">
                {PARTNERS.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 font-medium tracking-widest text-[10px]">
                        <span className="text-xl">{p.logo}</span> {p.name}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
