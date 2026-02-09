"use client";

import React from 'react';
import { FOOTER } from '@/constants';
import * as Icons from 'lucide-react';
import { Target } from 'lucide-react';

export const Footer = () => (
    <footer className="relative bg-gradient-to-b from-[#050A14] to-[#000000] border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            {/* 主要內容區 */}
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                {/* 品牌區 */}
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <Target className="w-8 h-8 text-[#C9A227]" />
                        <span className="text-white font-bold text-2xl">SPIN AI</span>
                    </div>
                    <p className="text-white/60 mb-6 leading-relaxed">
                        {FOOTER.description}
                    </p>
                    {/* 社群連結 */}
                    <div className="flex gap-4">
                        {FOOTER.social.map((social, index) => {
                            const IconComponent = Icons[social.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-white/60 hover:text-[#C9A227] hover:scale-110 transition-all"
                                    aria-label={social.name}
                                >
                                    {IconComponent && <IconComponent className="w-6 h-6" />}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* 快速連結 */}
                <div>
                    <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        快速連結
                    </h3>
                    <ul className="space-y-3">
                        {FOOTER.quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-white/60 hover:text-[#C9A227] text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 聯絡資訊 */}
                <div>
                    <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        聯絡我們
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {FOOTER.company && (
                            <li className="text-white/80 font-medium">
                                {FOOTER.company}
                            </li>
                        )}
                        <li>
                            <a
                                href={`mailto:${FOOTER.contact.email}`}
                                className="text-white/60 hover:text-[#C9A227] transition-colors"
                            >
                                {FOOTER.contact.email}
                            </a>
                        </li>
                        {FOOTER.contact.phone && (
                            <li>
                                <a
                                    href={`tel:${FOOTER.contact.phone}`}
                                    className="text-white/60 hover:text-[#C9A227] transition-colors"
                                >
                                    {FOOTER.contact.phone}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* 版權聲明 */}
            <div className="pt-8 border-t border-white/5 text-center">
                <p className="text-white/40 text-sm">
                    {FOOTER.copyright}
                </p>
            </div>
        </div>
    </footer>
);
