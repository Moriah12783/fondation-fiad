"use client";

import Link from "next/link";
import { ArrowRight, Leaf, GraduationCap, Briefcase, Users, Globe, Heart } from "lucide-react";
import { STRATEGIC_AXES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  Leaf, GraduationCap, Briefcase, Users, Globe, Heart,
};

const COLOR_CLASSES: Record<string, string> = {
  green: "bg-green-50 text-fiad-green border-green-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  gold: "bg-amber-50 text-amber-600 border-amber-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  teal: "bg-teal-50 text-teal-600 border-teal-100",
  red: "bg-rose-50 text-rose-600 border-rose-100",
};

interface MissionSectionProps {
  locale: string;
  messages: {
    tag: string;
    title: string;
    description: string;
    axes: string;
    learnMore: string;
  };
}

export default function MissionSection({ locale, messages }: MissionSectionProps) {
  const localePath = (href: string) => `/${locale}${href}`;
  const isFr = locale === "fr";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fiad-green/10 text-fiad-green text-sm font-medium mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-fiad-green" />
            {messages.tag}
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-fiad-navy mb-6 leading-tight">
            {messages.title}
          </h2>
          <p className="text-fiad-gray-light text-lg leading-relaxed mb-8">
            {messages.description}
          </p>
          <Link
            href={localePath("/fondation")}
            className="inline-flex items-center gap-2 text-fiad-green font-semibold hover:gap-3 transition-all"
          >
            {messages.learnMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Titre axes */}
        <h3 className="font-display font-semibold text-xl text-fiad-navy mb-8">
          {messages.axes}
        </h3>

        {/* Grille axes stratégiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_AXES.map((axis, index) => {
            const Icon = ICONS[axis.icon];
            const colorClass = COLOR_CLASSES[axis.color];

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-fiad-green/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 border", colorClass)}>
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <h4 className="font-display font-semibold text-fiad-navy mb-2">
                  {isFr ? axis.title : axis.titleEn}
                </h4>
                <p className="text-fiad-gray-light text-sm leading-relaxed">
                  {isFr ? axis.description : axis.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
