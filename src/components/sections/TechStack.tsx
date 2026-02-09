"use client";

import React from 'react';
import { TECH_STACK } from '@/constants';
import * as Icons from 'lucide-react';

export const TechStack = () => (
    <section id="tech-stack" className="relative py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    企業級技術堆疊
                </h2>
                <p className="text-white/60 text-lg md:text-xl">
                    穩定、可靠、安全
                </p>
            </div>

            {/* 技術分類網格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TECH_STACK.map((category, index) => {
                    const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#C9A227]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/10"
                        >
                            {/* 圖示 */}
                            <div className="mb-6 text-white/40 group-hover:text-[#C9A227] transition-colors">
                                {IconComponent && <IconComponent className="w-12 h-12" />}
                            </div>

                            {/* 分類名稱 */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                                {category.category}
                            </h3>

                            {/* 技術列表 */}
                            <div className="space-y-2">
                                {category.techs.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="text-sm text-white/60 bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 底部說明 */}
            <div className="mt-16 text-center">
                <p className="text-white/50 text-sm max-w-3xl mx-auto leading-relaxed">
                    我們使用業界最先進的技術堆疊，確保系統的高可用性、安全性與可擴展性。所有資料都經過加密處理，符合企業級安全標準。
                </p>
            </div>
        </div>
    </section>
);
