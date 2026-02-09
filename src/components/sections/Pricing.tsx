"use client";

import React from 'react';
import { PRICING_PLANS } from '@/constants';
import { Check } from 'lucide-react';

export const Pricing = () => (
    <section id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-[#050A14] to-[#0A1220]">
        <div className="max-w-7xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    靈活方案，滿足不同需求
                </h2>
                <p className="text-white/60 text-lg md:text-xl">
                    選擇最適合你的訂閱方案
                </p>
            </div>

            {/* 定價卡片 */}
            <div className="grid md:grid-cols-3 gap-8">
                {PRICING_PLANS.map((plan, index) => (
                    <div
                        key={index}
                        className={`pricing-card opacity-0 translate-y-8 relative bg-gradient-to-br from-white/5 to-transparent border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${plan.highlighted
                                ? 'border-[#C9A227] shadow-xl shadow-[#C9A227]/20 scale-105 hover:scale-110'
                                : 'border-white/10 hover:border-[#C9A227]/30 hover:scale-105'
                            }`}
                    >
                        {/* 推薦標籤 */}
                        {plan.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A227] text-black text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                                {plan.badge}
                            </div>
                        )}

                        {/* 方案名稱 */}
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {plan.name}
                        </h3>

                        {/* 描述 */}
                        <p className="text-white/60 text-sm mb-6">
                            {plan.description}
                        </p>

                        {/* 價格 */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-white">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-white/60 text-lg">
                                        {plan.period}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* 功能列表 */}
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                                    <Check className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA 按鈕 */}
                        <a
                            href={plan.ctaLink}
                            className={`block w-full text-center py-4 rounded-lg font-bold text-sm tracking-wider transition-all ${plan.highlighted
                                    ? 'bg-[#C9A227] text-black hover:bg-[#F5D76E] shadow-lg'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            {plan.cta}
                        </a>
                    </div>
                ))}
            </div>

            {/* 底部說明 */}
            <div className="mt-16 text-center">
                <p className="text-white/50 text-sm">
                    所有方案都包含 14 天免費試用期，無需信用卡 • 隨時可取消
                </p>
            </div>
        </div>
    </section>
);
