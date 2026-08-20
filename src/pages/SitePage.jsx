import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowUpRight, IconCheckCircle } from "../components/icons/MedicalIcons";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Shared hero used by every secondary page. Echoes the homepage Hero's
 * visual language: gradient glow blobs, a masked grid background, and an
 * animated ECG/heartbeat pulse line running through it. Content fades and
 * rises in on mount, staggered eyebrow -> title -> description -> CTA.
 */

function PulseGrid() {
    return (
        <>
            {/* grid, masked to fade toward the edges */}
            <div className="sp-grid" aria-hidden="true" />

            {/* animated ECG / heartbeat line traveling across the grid */}
            <svg
                className="sp-ecg"
                viewBox="0 0 1200 200"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                focusable="false"
            >
                <defs>
                    <linearGradient id="sp-ecg-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                        <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                    <filter id="sp-ecg-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" />
                    </filter>
                </defs>
                {/* faint static baseline */}
                <path
                    d="M -50 100 L 220 100 L 260 40 L 300 160 L 330 100 L 420 100 L 460 60 L 500 140 L 540 100 L 1250 100"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.14"
                />
                {/* glowing traveling pulse (dash trick) */}
                <path
                    d="M -50 100 L 220 100 L 260 40 L 300 160 L 330 100 L 420 100 L 460 60 L 500 140 L 540 100 L 1250 100"
                    fill="none"
                    stroke="url(#sp-ecg-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="220 1400"
                    filter="url(#sp-ecg-blur)"
                    className="sp-ecg-pulse"
                />
                <path
                    d="M -50 100 L 220 100 L 260 40 L 300 160 L 330 100 L 420 100 L 460 60 L 500 140 L 540 100 L 1250 100"
                    fill="none"
                    stroke="url(#sp-ecg-grad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="220 1400"
                    className="sp-ecg-pulse"
                />
            </svg>

            {/* gradient glow blobs, same palette as the homepage hero */}
            <div className="sp-glow sp-glow-blue" aria-hidden="true" />
            <div className="sp-glow sp-glow-violet" aria-hidden="true" />
        </>
    );
}

export default function SitePage({ eyebrow, title, description, sections = [], cta = "Book a demo", children, showSections = true }) {
    const [mounted, setMounted] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <>
            <Header />
            <main>
                <section
                    className={`sp-hero relative overflow-hidden bg-bg px-4 py-20 sm:py-28 ${reducedMotion ? "sp-reduced-motion" : ""
                        }`}
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-secondary opacity-70 z-10" />

                    <PulseGrid />

                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <p
                            className={`sp-fade sp-fade-1 mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary ${mounted ? "sp-in" : ""
                                }`}
                        >
                            {eyebrow}
                        </p>
                        <h1
                            className={`sp-fade sp-fade-2 text-4xl font-bold tracking-tight text-text sm:text-6xl ${mounted ? "sp-in" : ""
                                }`}
                        >
                            {title}
                        </h1>
                        <p
                            className={`sp-fade sp-fade-3 mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg ${mounted ? "sp-in" : ""
                                }`}
                        >
                            {description}
                        </p>
                        <div className={`sp-fade sp-fade-4 ${mounted ? "sp-in" : ""}`}>
                            <Link
                                to="/contact"
                                className="sp-cta mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_var(--color-primary)] transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                {cta}
                                <IconArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {children}

                {showSections && <section className="bg-surface px-4 py-16 sm:py-24">
                    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                        {sections.map((section, i) => (
                            <article
                                key={section.title}
                                className="sp-card group rounded-2xl border border-border bg-bg p-6 shadow-sm sm:p-8 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                <span className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <IconCheckCircle size={20} />
                                </span>
                                <h2 className="text-xl font-semibold text-text">{section.title}</h2>
                                <p className="mt-3 text-sm leading-7 text-text-muted">{section.description}</p>
                                {section.items && (
                                    <ul className="mt-5 space-y-3">
                                        {section.items.map((item) => (
                                            <li key={item} className="flex gap-2 text-sm text-text-muted">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>
                </section>}
            </main>
            <Footer />

            <style>{`
        /* ---- masked grid background ---- */
        .sp-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.032) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(60% 70% at 50% 35%, black, transparent 80%);
          mask-image: radial-gradient(60% 70% at 50% 35%, black, transparent 80%);
          pointer-events: none;
        }

        /* ---- gradient glow blobs, same palette as homepage hero ---- */
        .sp-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          pointer-events: none;
        }
        .sp-glow-blue {
          width: 380px; height: 380px;
          top: -100px; left: -80px;
          background: #2563EB;
          opacity: 0.09;
        }
        .sp-glow-violet {
          width: 340px; height: 340px;
          top: -40px; right: -100px;
          background: #4F46E5;
          opacity: 0.08;
        }

        /* ---- animated ECG / heartbeat pulse line ---- */
        .sp-ecg {
          position: absolute;
          inset-inline: 0;
          top: 45%;
          transform: translateY(-50%);
          width: 100%;
          height: 200px;
          overflow: visible;
          pointer-events: none;
        }
        .sp-ecg-pulse {
          animation: spEcgTravel 6.5s linear infinite;
        }
        @keyframes spEcgTravel {
          from { stroke-dashoffset: 1600; }
          to   { stroke-dashoffset: 0; }
        }

        /* ---- staggered fade/rise entrance for hero text ---- */
        .sp-fade {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sp-fade.sp-in { opacity: 1; transform: translateY(0); }
        .sp-fade-1.sp-in { transition-delay: 0ms; }
        .sp-fade-2.sp-in { transition-delay: 90ms; }
        .sp-fade-3.sp-in { transition-delay: 180ms; }
        .sp-fade-4.sp-in { transition-delay: 270ms; }

        .sp-cta { animation: none; }
        .sp-fade-4.sp-in .sp-cta { animation: spCtaPulse 2.4s ease-in-out 1.2s 1; }
        @keyframes spCtaPulse {
          0%   { box-shadow: 0 8px 20px -8px var(--color-primary); }
          50%  { box-shadow: 0 8px 26px -6px var(--color-primary); }
          100% { box-shadow: 0 8px 20px -8px var(--color-primary); }
        }

        /* reduced motion: show content immediately, skip animation */
        .sp-reduced-motion .sp-fade {
          opacity: 1;
          transform: none;
          transition: none;
        }
        .sp-reduced-motion .sp-ecg-pulse { animation: none !important; }
        @media (prefers-reduced-motion: reduce) {
          .sp-fade { opacity: 1; transform: none; transition: none; }
          .sp-ecg-pulse { animation: none !important; }
        }

        @media (max-width: 640px) {
          .sp-glow-blue, .sp-glow-violet { filter: blur(60px); }
          .sp-ecg { top: 40%; }
        }
      `}</style>
        </>
    );
}
