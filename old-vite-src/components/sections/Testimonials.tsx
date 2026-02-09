import React from 'react';
import { TESTIMONIALS } from '../../constants';

export const Testimonials = () => (
    <section id="testimonials" className="py-40 px-6 bg-[#0E1A2B]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-center text-white/40 mb-24">顧問見證 — Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="testimonial-card p-12 bg-[#152238] border border-white/5 relative opacity-0">
                        <div className="absolute -top-6 left-12 w-12 h-12 rounded-full border-2 border-[#C9A227] overflow-hidden">
                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-white/80 text-lg font-light italic leading-relaxed mb-10 pt-4">
                            {t.content}
                        </p>
                        <div>
                            <div className="text-white font-bold tracking-tight">{t.name}</div>
                            <div className="text-[#C9A227] text-[10px] font-bold tracking-widest uppercase mt-1">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
