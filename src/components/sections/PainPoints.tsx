"use client";

import React from 'react';
import { PAIN_POINTS } from '@/constants';
import * as Icons from 'lucide-react';

export const PainPoints = () => (
    <section id="pain-points" className="relative py-32 px-6 bg-[#050A14]">
        <div className="max-w-7xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    你是否也遇到這些挑戰？
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                    傳統的銷售方式已經無法應對現代客戶的需求
                </p>
            </div>

            {/* 痛點卡片 */}
            <div className="grid md:grid-cols-3 gap-8">
                {PAIN_POINTS.map((pain, index) => {
                    const IconComponent = Icons[pain.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return (
                        <div
                            key={index}
                            className="pain-block opacity-0 translate-y-8 group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#C9A227]/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/10"
                        >
                            <div className="mb-6">
                                {IconComponent && <IconComponent className="w-16 h-16 text-[#C9A227]" />}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                                {pain.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {pain.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
