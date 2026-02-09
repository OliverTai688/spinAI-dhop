import React from 'react';

export const Footer = () => (
    <footer className="py-24 px-6 bg-[#050A14] border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="text-white font-bold text-2xl tracking-tighter italic">誠問 AI</div>
                <div className="text-white/30 text-[8px] font-bold tracking-[0.4em] uppercase">
                    Digitizing Professional Dialogues
                </div>
            </div>
            <div className="text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">
                © 2025 誠問 AI · Domain Specific Intelligence for Consultants
            </div>
            <div className="flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                <a href="#" className="hover:text-[#C9A227] transition-colors">服務條款</a>
                <a href="#" className="hover:text-[#C9A227] transition-colors">隱私政策</a>
            </div>
        </div>
    </footer>
);
