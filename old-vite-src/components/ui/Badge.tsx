import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'gold' | 'outline' | 'navy';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className }) => {
    const variants = {
        gold: 'bg-[#C9A227] text-black',
        outline: 'border border-white/20 text-white/60',
        navy: 'bg-[#152238] border border-white/5 text-white/40',
    };

    return (
        <span className={cn(
            'text-[9px] font-black tracking-[0.2em] px-3 py-1 uppercase whitespace-nowrap inline-block',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
