"use client";

import React from 'react';
import { HERO } from '@/constants';
import { ArrowRight, Handshake } from 'lucide-react';

export const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#050A14] overflow-hidden pt-32 pb-20">
        {/* 背景光暈效果 */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/30 via-transparent to-transparent scale-150"></div>

        {/* 內容 */}
        <div className="hero-content max-w-5xl z-10">
            {/* 小標籤 */}
            <span className="hero-label block text-[#C9A227] text-[10px] font-bold tracking-[0.6em] uppercase mb-8 opacity-0 translate-y-4">
                {HERO.label}
            </span>

            {/* 主標題 */}
            <h1 className="hero-title text-white text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.05] opacity-0 translate-y-4">
                {HERO.title}
                <span className="block text-2xl md:text-4xl mt-6 font-light text-white/70 italic">
                    {HERO.subtitle}
                </span>
            </h1>

            {/* 副標題 */}
            <p className="hero-sub text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0">
                {HERO.description}
            </p>

            {/* CTA 按鈕組 */}
            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 mb-20">
                <a
                    href={HERO.cta.primaryLink}
                    className="px-12 py-5 bg-[#C9A227] hover:bg-[#F5D76E] text-black font-bold text-[11px] tracking-[0.4em] uppercase transition-all shadow-2xl shadow-[#C9A227]/20 hover:scale-105 transform"
                >
                    {HERO.cta.primary}
                </a>
                <a
                    href={HERO.cta.secondaryLink}
                    className="group px-12 py-5 border border-white/20 text-white hover:bg-white/10 font-bold text-[11px] tracking-[0.4em] uppercase transition-all flex items-center gap-2"
                >
                    {HERO.cta.secondary} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* 合作夥伴 */}
            <div className="mt-16 pt-8 border-t border-white/5 opacity-50">
                <p className="text-white/40 text-xs tracking-widest mb-4">戰略合作夥伴</p>
                <div className="flex items-center justify-center gap-3 text-white/60 font-medium tracking-widest text-sm">
                    <Handshake className="w-6 h-6 text-[#C9A227]" /> {HERO.partner}
                </div>
            </div>
        </div>
    </section>
);
