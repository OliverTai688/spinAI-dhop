import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  PainPoints,
  Features,
  Pricing,
  Comparison,
  Testimonials,
  UpgradePath,
  Enterprise,
  FinalCTA,
  Fundraising
} from './components/sections';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.to('.hero-label', { opacity: 1, y: 0, duration: 0.6 })
        .to('.hero-title', { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .to('.hero-sub', { opacity: 1, duration: 0.8 }, "-=0.4")
        .to('.hero-cta', { opacity: 1, duration: 0.8 }, "-=0.4");

      // PainPoints Sequential Appearance
      gsap.utils.toArray<HTMLElement>('.pain-block').forEach((block) => {
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Pricing Card ScrollTrigger
      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Path nodes
      gsap.utils.toArray<HTMLElement>('.path-node').forEach((node) => {
        gsap.to(node, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Feature items
      gsap.from('.feature-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.feature-item',
          start: "top 85%"
        }
      });

      // Testimonial cards
      gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <div ref={containerRef} className="bg-[#050A14] text-white font-sans selection:bg-[#C9A227] selection:text-black antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Pricing />
        <Comparison />
        <Testimonials />
        <Fundraising />
        <UpgradePath />
        <Enterprise />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
