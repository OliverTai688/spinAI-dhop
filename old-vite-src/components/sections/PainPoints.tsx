import React from 'react';

export const PainPoints = () => {
    const pains = [
        "客戶只比較價格，而非你的策略價值。",
        "顧問過度依賴直覺，而非結構化邏輯。",
        "成交後的對話經驗，無法轉化為團隊資產。"
    ];
    return (
        <section className="py-40 px-6 bg-[#0E1A2B]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-white/50 text-center mb-24">認清現狀 — Pain Recognition</h2>
                <div className="space-y-32">
                    {pains.map((p, i) => (
                        <div key={i} className="pain-block flex items-start gap-12 group opacity-0 translate-y-10">
                            <div className="flex-shrink-0 w-px h-24 bg-white/20 group-hover:bg-[#C9A227] transition-all duration-1000 origin-top"></div>
                            <p className="text-2xl md:text-5xl font-light text-white tracking-tight leading-tight group-hover:text-[#F2F2F2] transition-colors duration-700">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
