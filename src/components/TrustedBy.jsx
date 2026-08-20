import React, { useEffect, useState } from "react";

/**
 * Trusted By — auto-scrolling logo strip, light theme.
 * Uses simple lettermark badges instead of real company logos (no
 * third-party trademarks). Swap COMPANIES with your actual client/partner
 * names — or real logo images — when you have them.
 *
 * The row is duplicated once so the marquee loop is seamless, and the
 * animation pauses automatically if the user prefers reduced motion.
 */

const COMPANIES = [
    "Nova Health",
    "Bluewave",
    "Solstice Labs",
    "Meridian Care",
    "Orbit Diagnostics",
    "Cedarline",
    "Northbridge",
    "Vertex Clinics",
];

function LogoBadge({ name }) {
    const initial = name.charAt(0);
    return (
        <div className="group flex items-center gap-2.5 shrink-0 px-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-text-muted/10 text-text-muted font-bold text-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                {initial}
            </span>
            <span className="text-text-muted font-semibold text-[15px] whitespace-nowrap grayscale opacity-70 group-hover:opacity-100 group-hover:text-text transition-all duration-300">
                {name}
            </span>
        </div>
    );
}

export default function TrustedBy() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const listener = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", listener);
        return () => mq.removeEventListener("change", listener);
    }, []);

    return (
        <section className="w-full bg-bg py-12 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wide mb-8">
                    Trusted by teams at
                </p>

                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage:
                            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div
                        className={`flex items-center gap-10 sm:gap-14 w-max ${reducedMotion ? "" : "marquee-track"
                            }`}
                    >
                        {[...COMPANIES, ...COMPANIES].map((name, i) => (
                            <LogoBadge key={`${name}-${i}`} name={name} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .marquee-track {
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}