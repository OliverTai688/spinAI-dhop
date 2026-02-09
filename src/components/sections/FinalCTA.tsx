"use client";

import React from 'react';
import { FINAL_CTA } from '@/constants';

export const FinalCTA = () => (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0A1220] via-[#050A14] to-[#050A14] overflow-hidden">
        {/* 背景光暈 */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/40 via-[#C9A227]/10 to-transparent scale-150"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* 標題 */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {FINAL_CTA.title}
            </h2>

            {/* 副標題 */}
            <p className="text-white/70 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                {FINAL_CTA.subtitle}
            </p>

            {/* CTA 按鈕組 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                    href={FINAL_CTA.primaryLink}
                    className="px-16 py-6 bg-[#C9A227] hover:bg-[#F5D76E] text-black font-bold text-sm tracking-[0.4em] uppercase transition-all shadow-2xl shadow-[#C9A227]/30 hover:scale-110 transform rounded-lg"
                >
                    {FINAL_CTA.primaryCta}
                </a>
                <a
                    href={FINAL_CTA.secondaryLink}
                    className="px-16 py-6 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-sm tracking-[0.4em] uppercase transition-all rounded-lg"
                >
                    {FINAL_CTA.secondaryCta}
                </a>
            </div>

            {/* 信任標記 */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-lg">🔒</span> 企業級加密
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span> 14 天免費試用
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span> 即開即用
                </div>
            </div>
        </div>
    </section>
);
