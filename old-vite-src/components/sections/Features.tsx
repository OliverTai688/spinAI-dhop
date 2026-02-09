import React from 'react';
import { Layout, MessageSquare, Zap } from 'lucide-react';

export const Features = () => (
    <section id="features" className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { icon: <Layout />, title: "策略圖譜建立", eng: "Strategy Mapping", desc: "將感性對話轉化為理性架構，建立專屬客戶的策略地景圖。" },
                { icon: <MessageSquare />, title: "對話智能分析", eng: "Dialogue Intelligence", desc: "即時解析核心訊號，提示成交走向，確保不再錯失關鍵轉折。" },
                { icon: <Zap />, title: "結構化行動建議", eng: "Action Engine", desc: "對話後即產出精確腳本與行動方案，讓表現可被穩定複製。" }
            ].map((f, i) => (
                <div key={i} className="feature-item p-12 bg-[#152238] border border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="text-[#C9A227] mb-8">{f.icon}</div>
                    <div className="text-[9px] font-bold text-white/40 tracking-[0.4em] uppercase mb-4">{f.eng}</div>
                    <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">{f.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>
    </section>
);
