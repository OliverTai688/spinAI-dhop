"use client";

import React from 'react';
import { SPIN_STEPS } from '@/constants';
import { ArrowRight } from 'lucide-react';

export const SpinMethod = () => (
    <section id="spin-method" className="relative py-32 px-6 bg-gradient-to-b from-[#050A14] to-[#0A1220]">
        <div className="max-w-7xl mx-auto">
            {/* 標題 */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    什麼是 SPIN 銷售法？
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
                    全球頂尖業務都在用的結構化提問系統，透過四個步驟引導客戶從現況認知到主動需求
                </p>
            </div>

            {/* SPIN 流程圖 */}
            <div className="mb-20 relative">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
                    {SPIN_STEPS.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* 步驟卡片 */}
                            <div className="flex-1 group">
                                <div className="relative bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-2xl p-8 hover:border-[#C9A227]/50 transition-all duration-300 hover:scale-105">
                                    {/* 步驟標記 */}
                                    <div
                                        className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        {step.step}
                                    </div>

                                    {/* 內容 */}
                                    <div className="mt-6">
                                        <div className="text-xs tracking-widest opacity-60 mb-2 uppercase">
                                            {step.name}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* AI 協助說明 */}
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-[#C9A227] text-xs font-medium flex items-start gap-2">
                                                <span className="text-base">🤖</span>
                                                <span>{step.aiHelp}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 箭頭 (除了最後一個) */}
                            {index < SPIN_STEPS.length - 1 && (
                                <div className="hidden md:block text-[#C9A227] opacity-30">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* 底部說明 */}
            <div className="text-center bg-gradient-to-r from-[#C9A227]/10 to-transparent border-l-4 border-[#C9A227] rounded-lg p-8 max-w-4xl mx-auto">
                <p className="text-white/80 leading-relaxed">
                    <span className="font-bold text-[#C9A227]">SPIN 超級業務系統</span> 內建 AI 引擎，會根據您輸入的客戶資訊，自動生成每個階段的專業提問清單，讓您不再需要花時間思考「該問什麼」，而是專注在「如何深入對話」。
                </p>
            </div>
        </div>
    </section>
);
