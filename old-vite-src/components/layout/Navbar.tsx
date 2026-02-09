import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '核心功能', href: '#features' },
        { name: '顧問見證', href: '#testimonials' },
        { name: '訂閱方案', href: '#pricing' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'bg-[#050A14]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="text-white font-bold text-xl tracking-tighter italic">誠問 AI</div>
                    <div className="hidden md:block h-4 w-px bg-white/20 mx-2"></div>
                    <div className="hidden md:block text-[8px] font-bold text-white/40 tracking-[0.3em] uppercase">
                        Professional Governance
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#C9A227] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-6 py-2 bg-[#C9A227] text-black text-[9px] font-bold tracking-[0.2em] uppercase hover:bg-[#F5D76E] transition-all cursor-pointer">
                        立即預約演示
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0E1A2B] border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full py-4 bg-[#C9A227] text-black text-[9px] font-bold tracking-[0.2em] uppercase">
                        立即預約演示
                    </button>
                </div>
            )}
        </nav>
    );
};
