import React, { useState } from 'react';
import { PRICING_DATA } from '../../constants';
import { Check } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

export const Pricing = () => {
    const [activeModal, setActiveModal] = useState<'pay' | 'code' | null>(null);

    return (
        <section id="pricing" className="py-32 px-6 bg-[#050A14] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-[10px] font-bold tracking-[0.7em] uppercase text-[#C9A227] mb-6 block">訂閱方案 — Pricing</h2>
                    <h3 className="text-4xl font-bold text-white tracking-tight">啟動您的數位資產化</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {PRICING_DATA.map((plan, i) => (
                        <div key={i} className={`pricing-card p-12 flex flex-col bg-[#152238] border relative ${plan.highlighted ? 'border-[#C9A227] shadow-2xl md:scale-105 z-10' : 'border-white/5'} transition-all duration-500 opacity-0`}>
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge variant="gold">年度最受歡迎</Badge>
                                </div>
                            )}
                            <div className="mb-12">
                                <h3 className="text-[10px] font-bold mb-8 tracking-[0.4em] uppercase text-white/40">{plan.title}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-white/50 text-xs font-medium">{plan.period}</span>
                                </div>
                                <p className="text-white/70 text-sm font-light leading-relaxed min-h-[48px]">{plan.description}</p>
                            </div>
                            <ul className="space-y-6 mb-16 flex-grow">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-4">
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-[#C9A227]' : 'text-white/30'}`} />
                                        <span className="text-[12px] text-white/70 font-light leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setActiveModal('pay')}
                                className={`w-full py-5 font-bold tracking-[0.4em] uppercase text-[10px] transition-all mb-4 cursor-pointer ${plan.highlighted ? 'bg-[#C9A227] text-black hover:bg-[#F5D76E]' : 'border border-white/20 text-white hover:bg-white/10'}`}
                            >
                                {plan.cta}
                            </button>
                            {plan.highlighted && (
                                <button
                                    onClick={() => setActiveModal('code')}
                                    className="text-[9px] text-center text-white/30 hover:text-[#C9A227] transition-colors tracking-widest uppercase font-bold cursor-pointer"
                                >
                                    已有啟動碼？點此輸入
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Modal */}
            <Modal
                isOpen={activeModal === 'pay'}
                onClose={() => setActiveModal(null)}
                title="快速訂閱專業版"
            >
                <div className="space-y-6">
                    <p className="text-white/60 text-sm leading-relaxed">
                        選擇您的支付方式，立即啟動誠問 AI 完整策略功能。
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-4 border border-white/10 hover:border-[#C9A227] text-white text-[10px] font-bold uppercase transition-all">Stripe 付款</button>
                        <button className="py-4 border border-white/10 hover:border-[#C9A227] text-white text-[10px] font-bold uppercase transition-all">TapPay 付款</button>
                    </div>
                </div>
            </Modal>

            {/* Activation Code Modal */}
            <Modal
                isOpen={activeModal === 'code'}
                onClose={() => setActiveModal(null)}
                title="輸入啟動碼"
            >
                <div className="space-y-6">
                    <input
                        type="text"
                        placeholder="請輸入 16 位啟動序列碼"
                        className="w-full bg-[#050A14] border border-white/10 p-4 text-white text-sm outline-none focus:border-[#C9A227] transition-all"
                    />
                    <button className="w-full py-4 bg-[#C9A227] text-black text-[10px] font-bold uppercase tracking-widest">
                        立即解鎖
                    </button>
                </div>
            </Modal>
        </section>
    );
};
