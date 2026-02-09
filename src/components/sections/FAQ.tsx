"use client";

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/constants';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative py-32 px-6 bg-[#050A14]">
            <div className="max-w-4xl mx-auto">
                {/* 標題 */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        常見問題
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl">
                        快速找到你需要的答案
                    </p>
                </div>

                {/* FAQ 手風琴 */}
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl overflow-hidden hover:border-[#C9A227]/30 transition-all"
                        >
                            {/* 問題 */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-[#C9A227] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* 答案 */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-white/70 leading-relaxed border-t border-white/10 pt-6">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 底部聯絡 */}
                <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#C9A227]/10 to-transparent border border-[#C9A227]/20 rounded-xl">
                    <p className="text-white/80">
                        還有其他問題？ <a href="mailto:contact@spinai.tw" className="text-[#C9A227] hover:text-[#F5D76E] font-bold underline">聯絡我們</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
