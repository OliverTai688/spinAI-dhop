"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Hero,
  PainPoints,
  SpinMethod,
  Features,
  UserJourney,
  TechStack,
  Pricing,
  FAQ,
  FinalCTA,
} from '@/components/sections';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero 動畫
      const heroTl = gsap.timeline();
      heroTl
        .to('.hero-label', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to('.hero-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.3")
        .to('.hero-sub', { opacity: 1, duration: 0.8 }, "-=0.4")
        .to('.hero-cta', { opacity: 1, duration: 0.8 }, "-=0.4");

      // 痛點卡片逐一出現
      gsap.utils.toArray<HTMLElement>('.pain-block').forEach((block, index) => {
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // 功能卡片
      gsap.utils.toArray<HTMLElement>('.feature-item').forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // 時間軸節點
      gsap.utils.toArray<HTMLElement>('.path-node').forEach((node) => {
        gsap.to(node, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // 定價卡片
      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#050A14] text-white font-sans selection:bg-[#C9A227] selection:text-black antialiased overflow-x-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <SpinMethod />
        <Features />
        <UserJourney />
        {/* <TechStack /> */}
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
