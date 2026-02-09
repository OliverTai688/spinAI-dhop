"use client";

import React from 'react';
import { FEATURES } from '@/constants';
import * as Icons from 'lucide-react';

export const Features = () => (
    <section id="features" className="relative py-32 px-6 bg-[#050A14]">
        <div className="max-w-7xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    六大智慧模組
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                    從規劃到成交，全程 AI 陪伴
                </p>
            </div>

            {/* 功能卡片網格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => {
                    const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return (
                        <div
                            key={feature.id}
                            className="feature-item opacity-0 translate-y-8 group relative bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A227]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A227]/10"
                        >
                            {/* 模組 ID 標籤 */}
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 tracking-wider">
                                {feature.id}
                            </div>

                            {/* 圖示 */}
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                {IconComponent && <IconComponent className="w-16 h-16 text-[#C9A227]" />}
                            </div>

                            {/* 標題 */}
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                                {feature.title}
                            </h3>

                            {/* 描述 */}
                            <p className="text-white/60 mb-6 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* 標籤 */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {feature.highlights.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] rounded-full border border-[#C9A227]/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* 詳細功能列表 */}
                            <div className="border-t border-white/10 pt-6">
                                <ul className="space-y-2">
                                    {feature.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                                            <span className="text-[#C9A227] mt-1">✓</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
