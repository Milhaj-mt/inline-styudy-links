import React from "react";
import Image from "next/image";
import { heroShowcaseCards } from "@/data/showcaseCards";

export default function HeroCardsPreview() {
  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 sm:mt-16 pt-4 px-2 sm:px-4">
      {/* Cards Row - 5 cards peeking up from bottom */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 overflow-hidden">
        {heroShowcaseCards.map((card, idx) => {
          // Emphasize center card slightly on desktop
          const isCenter = idx === 2;

          return (
            <div
              key={card.id}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card transition-all duration-300 hover:scale-[1.03] ${
                isCenter ? "ring-2 ring-[var(--color-primary)]/40 shadow-xl" : ""
              }`}
            >
              {/* Image Container with aspect ratio matching photo peek */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay at bottom of card for high text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Card Tag Badge */}
                {card.tag && (
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-md shadow-xs ${
                        isCenter
                          ? "bg-blue-600 text-white"
                          : "bg-white/90 text-slate-800 border border-slate-200/50"
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>
                )}

                {/* Card Info Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug truncate">
                    {card.title}
                  </p>
                  <p className="text-[10px] text-slate-200 truncate mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
