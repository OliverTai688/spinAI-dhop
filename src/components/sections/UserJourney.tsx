"use client";

import React from 'react';
import { USER_JOURNEY } from '@/constants';
import * as Icons from 'lucide-react';

export const UserJourney = () => (
    <section id="user-journey" className="relative py-32 px-6 bg-gradient-to-b from-[#0A1220] to-[#050A14]">
        <div className="max-w-5xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    從規劃到成交，5 步驟完成專業拜訪
                </h2>
                <p className="text-white/60 text-lg md:text-xl">
                    簡單、高效、可重複的銷售流程
                </p>
            </div>

            {/* 時間軸 */}
            <div className="relative">
                {/* 連接線 */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A227] via-[#C9A227]/50 to-transparent"></div>

                {/* 步驟卡片 */}
                <div className="space-y-12">
                    {USER_JOURNEY.map((step, index) => {
                        const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                        return (
                            <div
                                key={step.step}
                                className={`path-node opacity-0 translate-y-8 relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* 步驟圖示 (居中) */}
                                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#C9A227] to-[#F5D76E] rounded-full flex items-center justify-center shadow-lg shadow-[#C9A227]/30 z-10">
                                    {IconComponent && <IconComponent className="w-8 h-8 text-black" />}
                                </div>

                                {/* 內容卡片 */}
                                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-2xl p-8 hover:border-[#C9A227]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/10">
                                        {/* 步驟編號 */}
                                        <div className="text-[#C9A227] font-mono text-sm mb-2">
                                            STEP {step.step}
                                        </div>

                                        {/* 標題 */}
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>

                                        {/* 描述 */}
                                        <p className="text-white/60 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);
