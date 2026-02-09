"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#050A14]/90 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#0E1A2B] border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="flex justify-between items-center p-8 border-b border-white/5">
                    <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};
