"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Target } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: '功能', href: '#features' },
        { label: 'SPIN 方法', href: '#spin-method' },
        { label: '定價', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#050A14]/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <Target className="w-7 h-7 text-[#C9A227]" />
                    <span className="text-white font-bold text-xl tracking-tight group-hover:text-[#C9A227] transition-colors">
                        SPIN AI
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-[#C9A227] text-sm font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:contact@spinai.tw?subject=預約系統演示"
                        className="px-6 py-2.5 bg-[#C9A227] hover:bg-[#F5D76E] text-black font-bold text-xs tracking-wider uppercase transition-all rounded-lg"
                    >
                        預約演示
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#050A14] border-t border-white/10">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-white/80 hover:text-[#C9A227] text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="mailto:contact@spinai.tw?subject=預約系統演示"
                            className="block text-center px-6 py-2.5 bg-[#C9A227] hover:bg-[#F5D76E] text-black font-bold text-xs tracking-wider uppercase transition-all rounded-lg"
                        >
                            預約演示
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
