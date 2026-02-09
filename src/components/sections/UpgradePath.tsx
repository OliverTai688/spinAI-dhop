"use client";

import React, { useEffect, useRef, useState } from 'react';

const MermaidDiagram = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [id] = useState(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        const initMermaid = async () => {
            const mermaid = (await import('mermaid')).default;
            mermaid.initialize({
                startOnLoad: true,
                theme: 'dark',
                themeVariables: {
                    primaryColor: '#152238',
                    primaryTextColor: '#FFFFFF',
                    primaryBorderColor: '#C9A227',
                    lineColor: '#C9A227',
                    secondaryColor: '#0E1A2B',
                    tertiaryColor: '#050A14',
                    fontFamily: 'Inter'
                },
                securityLevel: 'loose',
            });

            if (ref.current) {
                const { svg } = await mermaid.render(id, chart);
                if (ref.current) ref.current.innerHTML = svg;
            }
        };
        initMermaid();
    }, [chart, id]);

    return <div key={id} ref={ref} className="mermaid flex justify-center py-12" />;
};

export const UpgradePath = () => {
    const chart = `
    graph LR
      Start(14天試用版) -- 邏輯驗證 --> Personal(個人專業版)
      Personal -- 資產沉澱 --> System(策略資產化)
      System -- 團隊共享 --> Enterprise(企業團隊版)
      Enterprise -- 規模複製 --> Growth((可持續成長))
      
      style Start fill:#0E1A2B,stroke:#C9A227,stroke-width:1px,color:#fff
      style Personal fill:#152238,stroke:#C9A227,stroke-width:2px,color:#fff
      style Enterprise fill:#C9A227,stroke:#C9A227,color:#000
      style Growth fill:#fff,stroke:#fff,color:#000
  `;

    return (
        <section className="py-40 px-6 bg-[#0E1A2B] border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-center text-white/40 mb-20">策略升級路徑 — Strategic Upgrade Path</h2>
                <div className="mb-20">
                    <MermaidDiagram chart={chart} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { phase: "Phase 01", title: "驗證與上手", desc: "在試用期內導入 3 組核心案例，驗證 AI 對話分析的精準度。" },
                        { phase: "Phase 02", title: "數位資產化", desc: "建立個人專屬策略圖譜，將成功的對話經驗標準化。" },
                        { phase: "Phase 03", title: "系統規模化", desc: "將標準化邏輯擴展至團隊，實現成交率的穩定增長。" }
                    ].map((item, i) => (
                        <div key={i} className="path-node p-10 border border-white/5 bg-[#152238] hover:border-[#C9A227]/30 transition-all opacity-0">
                            <div className="text-[#C9A227] text-[10px] font-bold mb-4 tracking-widest uppercase">{item.phase}</div>
                            <h4 className="text-white text-lg font-bold mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-white/60 text-xs font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
