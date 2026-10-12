import React from "react";

interface HeroActionsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function HeroActions({
  primaryText = "Explore Programs",
  primaryHref = "#destinations",
  secondaryText = "Get a Call Back",
  secondaryHref = "#callback",
}: HeroActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 mb-8 sm:mb-10">
      {/* Primary Pill Button matching "Explore Courses" in image */}
      <a
        href={primaryHref}
        className="btn-pill-primary inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-white cursor-pointer active:scale-95"
      >
        {primaryText}
      </a>

      {/* Secondary Pill Button matching "Get a Call Back" in image */}
      <a
        href={secondaryHref}
        className="btn-pill-secondary inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-white cursor-pointer active:scale-95"
      >
        {secondaryText}
      </a>
    </div>
  );
}
