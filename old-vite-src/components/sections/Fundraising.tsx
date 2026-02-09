import React from 'react';
import { Badge } from '../ui/Badge';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

export const Fundraising = () => {
    const milestones = [
        { icon: <Target className="w-6 h-6" />, title: "MVP 驗證", state: "100%", desc: "核心 SPIN 邏輯驗證完成" },
        { icon: <Users className="w-6 h-6" />, title: "種子用戶", state: "已啟動", desc: "誠交俱樂部前 50 名測試中" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "天使輪募資", state: "熱烈招募", desc: "目標 NT$ 3M - 5M" },
        { icon: <Award className="w-6 h-6" />, title: "Pre-A 輪", state: "2026 Q1", desc: "數位分身功能開發" },
    ];

    return (
        <section id="fundraising" className="py-40 px-6 bg-[#0E1A2B] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-[10px] font-bold tracking-[0.7em] uppercase text-[#C9A227] mb-6 block">募資計畫 — Fundraising</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">成為誠問 AI 的早期策略合夥人</h3>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        我們正在尋找第一批願景一致的天使支持者，共同將「會話資產化」推向亞太市場。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    {milestones.map((m, i) => (
                        <div key={i} className="p-8 bg-[#152238] border border-white/5 hover:border-[#C9A227]/30 transition-all">
                            <div className="text-[#C9A227] mb-6">{m.icon}</div>
                            <div className="mb-2">
                                <Badge variant="outline">{m.state}</Badge>
                            </div>
                            <h4 className="text-white text-lg font-bold mb-4">{m.title}</h4>
                            <p className="text-white/50 text-xs font-light leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#C9A227]/10 border border-[#C9A227]/20 p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h4 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-tight">專屬天使贊助方案</h4>
                            <p className="text-white/70 mb-8 font-light leading-relaxed">
                                參與天使輪募資，您將獲得終身專業版帳號、未來功能開發建議權，以及作為核心背書專家的名譽載入。
                            </p>
                            <div className="flex gap-4">
                                <button className="px-10 py-4 bg-[#C9A227] text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#F5D76E] transition-all cursor-pointer">
                                    索取募資簡報
                                </button>
                                <button className="px-10 py-4 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all cursor-pointer">
                                    聯繫負責人
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="p-6 bg-[#050A14] border border-white/10">
                                <div className="text-white/40 text-[9px] font-bold tracking-widest uppercase mb-2">已募資進度</div>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold text-white">45%</span>
                                    <span className="text-white/40 text-xs">/ NT$ 5,000,000</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#C9A227] w-[45%]"></div>
                                </div>
                            </div>
                            <div className="p-6 bg-[#050A14] border border-white/10">
                                <div className="text-white/40 text-[9px] font-bold tracking-widest uppercase mb-2">剩餘天使席位</div>
                                <div className="text-3xl font-bold text-white">12 / 50 <span className="text-xs text-[#C9A227] font-normal tracking-normal ml-2">席</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
