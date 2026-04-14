"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_STATS } from "@/lib/constants";

interface StatsSectionProps {
  locale: string;
  messages: {
    title: string;
    subtitle: string;
    beneficiaries: string;
    countries: string;
    projects: string;
    partners: string;
  };
}

function useCountUp(target: number, duration: number = 2000, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  isActive,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, isActive);

  return (
    <div
      className="text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl sm:text-6xl font-display font-bold text-fiad-green mb-2">
        {count.toLocaleString("fr-FR")}{suffix}
      </div>
      <div className="text-fiad-gray font-medium">{label}</div>
    </div>
  );
}

export default function StatsSection({ locale, messages }: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isFr = locale === "fr";

  const labels = [
    messages.beneficiaries,
    messages.countries,
    messages.projects,
    messages.partners,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-fiad-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fiad-navy mb-4">
            {messages.title}
          </h2>
          <p className="text-fiad-gray-light text-lg max-w-2xl mx-auto">
            {messages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {IMPACT_STATS.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={isFr ? stat.label : stat.labelEn}
              isActive={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Ligne décorative */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-16 h-0.5 bg-fiad-green" />
            <div className="w-3 h-3 rounded-full bg-fiad-gold" />
            <div className="w-16 h-0.5 bg-fiad-green" />
          </div>
        </div>
      </div>
    </section>
  );
}
