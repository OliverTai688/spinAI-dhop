"use client";

import React from 'react';
import { COMPARISON_DATA } from '@/constants';

export const Comparison = () => (
    <section className="py-32 px-6 bg-[#050A14] overflow-x-auto">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-center text-white/40 mb-16">詳細功能對比 — Comparison</h2>
            <div className="min-w-[800px]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-white/10">
                            <th className="py-8 text-[11px] font-bold uppercase tracking-widest text-white/40">核心能力</th>
                            <th className="py-8 text-[11px] font-bold uppercase tracking-widest text-white/40">免費試用</th>
                            <th className="py-8 text-[11px] font-bold uppercase tracking-widest text-[#C9A227]">專業版</th>
                            <th className="py-8 text-[11px] font-bold uppercase tracking-widest text-white/40">企業方案</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {COMPARISON_DATA.map((row, i) => (
                            <tr key={i} className="comparison-row hover:bg-white/5 transition-colors">
                                <td className="py-6 text-sm font-medium text-white">{row.name}</td>
                                <td className="py-6 text-xs text-white/50">{row.free.toString()}</td>
                                <td className="py-6 text-xs text-[#C9A227] font-bold">{row.pro.toString()}</td>
                                <td className="py-6 text-xs text-white/50">{row.enterprise.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);
