import React, { useEffect, useRef, useState } from "react";

/**
 * Premium light-theme AI / SaaS hero section.
 * Single-file implementation (Tailwind for layout, scoped <style> for the
 * bespoke wave/glow/float animations that Tailwind utilities can't express).
 */

/* ------------------------------------------------------------------ */
/*  Animated wavy "energy wire" background                            */
/* ------------------------------------------------------------------ */

function EnergyWaves() {
    // Each strand: a base path (drawn faint + static) plus a bright
    // "pulse" segment created with a long dash + animated dashoffset so
    // it reads as a moving point of light traveling along the wire.
    const strands = [
        {
            d: "M -100 260 C 150 160, 350 380, 620 240 S 1050 120, 1500 260",
            color: "url(#g-blue)",
            width: 2,
            dur: "9s",
            dash: "140 900",
            reverse: false,
            opacity: 0.55,
        },
        {
            d: "M -100 340 C 200 420, 420 200, 700 320 S 1100 420, 1500 300",
            color: "url(#g-violet)",
            width: 1.5,
            dur: "13s",
            dash: "90 900",
            reverse: true,
            opacity: 0.45,
        },
        {
            d: "M -100 180 C 180 260, 460 60, 760 180 S 1180 260, 1500 140",
            color: "url(#g-cyan)",
            width: 1.5,
            dur: "16s",
            dash: "70 900",
            reverse: false,
            opacity: 0.4,
        },
        {
            d: "M -100 420 C 220 340, 500 480, 800 400 S 1200 320, 1500 440",
            color: "url(#g-indigo)",
            width: 2,
            dur: "11s",
            dash: "110 900",
            reverse: true,
            opacity: 0.5,
        },
        {
            d: "M -100 100 C 250 40, 500 160, 820 90 S 1250 20, 1500 100",
            color: "url(#g-blue)",
            width: 1,
            dur: "20s",
            dash: "50 900",
            reverse: false,
            opacity: 0.3,
        },
    ];

    return (
        <svg
            className="ew-svg"
            viewBox="0 0 1400 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                    <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g-violet" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                    <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g-cyan" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#67E8F9" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g-indigo" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                    <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
                <filter id="ew-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.2" />
                </filter>
                <filter id="ew-blur-strong" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" />
                </filter>
            </defs>

            {strands.map((s, i) => (
                <g key={i} style={{ opacity: s.opacity }}>
                    {/* faint static base wire */}
                    <path
                        d={s.d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={s.width}
                        strokeLinecap="round"
                        opacity="0.18"
                    />
                    {/* soft trailing glow of the pulse */}
                    <path
                        d={s.d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={s.width * 3.2}
                        strokeLinecap="round"
                        filter="url(#ew-blur-strong)"
                        strokeDasharray={s.dash}
                        className={`ew-pulse ${s.reverse ? "ew-pulse-rev" : ""}`}
                        style={{ animationDuration: s.dur }}
                    />
                    {/* bright glowing core of the pulse */}
                    <path
                        d={s.d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={s.width}
                        strokeLinecap="round"
                        filter="url(#ew-blur-soft)"
                        strokeDasharray={s.dash}
                        className={`ew-pulse ${s.reverse ? "ew-pulse-rev" : ""}`}
                        style={{ animationDuration: s.dur }}
                    />
                </g>
            ))}
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Floating product/dashboard preview                                */
/* ------------------------------------------------------------------ */

function DashboardPreview() {
    return (
        <div className="dash-wrap">
            <div className="dash-glow" aria-hidden="true" />
            <div
                className="dash-glass"
                role="img"
                aria-label="Preview of the Aurora AI operations dashboard showing revenue, active users, satisfaction rate, and referral tracking"
            >
                <div className="dash-reflection" aria-hidden="true" />

                {/* window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="ml-3 text-[11px] font-medium tracking-wide text-slate-400">
                        app.aurora.ai/dashboard
                    </span>
                </div>

                <div className="p-4 sm:p-6">
                    {/* top stat row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {[
                            { label: "Monthly Revenue", value: "$84,210", delta: "+18%", up: true },
                            { label: "Active Users", value: "12,480", delta: "+6%", up: true },
                            { label: "Workflows Automated", value: "3,096", delta: "-4%", up: false },
                            { label: "Client Satisfaction", value: "97%", delta: "+3%", up: true },
                        ].map((c) => (
                            <div
                                key={c.label}
                                className="rounded-2xl bg-white border border-slate-200/80 p-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                            >
                                <p className="text-[11px] text-slate-500 mb-1.5">{c.label}</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-lg font-bold text-slate-900">{c.value}</span>
                                    <span
                                        className={`text-[11px] font-semibold ${c.up ? "text-emerald-500" : "text-rose-500"
                                            }`}
                                    >
                                        {c.delta}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* main row */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-3">
                        <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-4 relative overflow-hidden min-h-[160px]">
                            <p className="text-[11px] font-semibold text-slate-500 mb-3">
                                Automation Throughput
                            </p>
                            <svg viewBox="0 0 300 90" className="w-full h-20" preserveAspectRatio="none">
                                <polyline
                                    fill="none"
                                    stroke="#2563EB"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    points="0,70 40,55 80,60 120,30 160,42 200,18 240,26 300,10"
                                />
                                <polyline
                                    fill="url(#dash-area)"
                                    stroke="none"
                                    points="0,70 40,55 80,60 120,30 160,42 200,18 240,26 300,10 300,90 0,90"
                                />
                                <defs>
                                    <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
                                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="text-[11px] text-slate-400 mt-1">Last 30 days · tasks/hour</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 flex flex-col items-center justify-center">
                            <p className="text-[11px] font-semibold text-slate-500 mb-2 self-start">
                                Model Confidence
                            </p>
                            <div className="relative w-24 h-24">
                                <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#EEF2FF" strokeWidth="9" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="42"
                                        fill="none"
                                        stroke="#4F46E5"
                                        strokeWidth="9"
                                        strokeLinecap="round"
                                        strokeDasharray="264"
                                        strokeDashoffset="26"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-base font-bold text-slate-900">95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  CTA buttons                                                        */
/* ------------------------------------------------------------------ */

function HeroCTA() {
    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                    type="button"
                    className="cta-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                    Book A Free Demo
                    <span aria-hidden="true" className="cta-arrow transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </button>

                {/* <button
                    type="button"
                    className="cta-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                    Explore Solutions
                </button> */}

            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main hero section                                                  */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const listener = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", listener);
        return () => mq.removeEventListener("change", listener);
    }, []);

    return (
        <section
            className={`hero-root relative w-full min-h-screen overflow-hidden ${reducedMotion ? "reduced-motion" : ""
                }`}
            aria-labelledby="hero-heading"
        >
            {/* background base + glow blobs */}
            <div className="absolute inset-0 hero-bg" aria-hidden="true" />
            <div className="glow-blob glow-blue" aria-hidden="true" />
            <div className="glow-blob glow-violet" aria-hidden="true" />
            <div className="glow-blob glow-cyan" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            {/* animated energy wires, sit behind the dashboard */}
            <div className="absolute inset-x-0 top-[18%] sm:top-[14%] h-[560px] pointer-events-none">
                <EnergyWaves />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 sm:pt-20 flex flex-col items-center text-center">
                {/* eyebrow badge */}
                <div className="badge inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 mb-5">
                    <span className="badge-dot" aria-hidden="true" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
                        Modern Hospital Management Platform
                    </span>
                </div>

                {/* heading */}
                <h1
                    id="hero-heading"
                    className="font-extrabold tracking-tight text-slate-900 leading-[1.1]"
                    style={{ fontSize: "clamp(1.9rem, 3.6vw, 3.25rem)" }}
                >
                    Manage Your Hospital Smarter, Faster & Better
                    <br />
                    {/* <span className="hero-gradient-text">with AI-Powered Solutions</span> */}
                </h1>

                {/* supporting copy */}
                <p className="mt-4 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed max-w-[560px]">
                    One powerful platform to manage patients, doctors, appointments, billing, pharmacy, laboratory, admissions, and hospital operations.
                </p>

                {/* CTAs */}
                <div className="mt-7 w-full">
                    <HeroCTA />
                </div>

                {/* dashboard preview */}
                <div className="mt-10 sm:mt-12 w-full flex justify-center">
                    <DashboardPreview />
                </div>
            </div>

            <style>{`
        .hero-root {
          background: var(--color-bg, #F8FAFF);
        }
        .hero-bg {
          background:
            radial-gradient(60% 45% at 18% 8%, rgba(37,99,235,0.07), transparent 60%),
            radial-gradient(55% 40% at 85% 12%, rgba(79,70,229,0.06), transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 40%, #EEF4FF 100%);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.028) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(65% 55% at 50% 20%, black, transparent 75%);
          mask-image: radial-gradient(65% 55% at 50% 20%, black, transparent 75%);
          pointer-events: none;
        }
        .glow-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(100px);
          pointer-events: none;
        }
        .glow-blue {
          width: 460px; height: 460px;
          top: -120px; left: -120px;
          background: #2563EB;
          opacity: 0.10;
        }
        .glow-violet {
          width: 420px; height: 420px;
          top: 40px; right: -140px;
          background: #4F46E5;
          opacity: 0.09;
        }
        .glow-cyan {
          width: 380px; height: 380px;
          bottom: -60px; left: 50%;
          transform: translateX(-50%);
          background: #06B6D4;
          opacity: 0.07;
        }

        /* badge */
        .badge {
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 2px rgba(37,99,235,0.06), 0 6px 20px -8px rgba(37,99,235,0.18);
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 9999px;
          background: #2563EB;
          box-shadow: 0 0 0 0 rgba(37,99,235,0.55);
          animation: badgePulse 2.4s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,99,235,0.45); }
          70%  { box-shadow: 0 0 0 6px rgba(37,99,235,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }

        /* heading gradient */
        .hero-gradient-text {
          background: linear-gradient(90deg, #2563EB 0%, #4F46E5 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* CTA buttons */
        .cta-primary {
          background: linear-gradient(90deg, #2563EB, #4F46E5);
          box-shadow: 0 8px 24px -8px rgba(37,99,235,0.5);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(79,70,229,0.55);
        }
        .cta-secondary { transition: transform 200ms ease; }
        .cta-secondary:hover { transform: translateY(-2px); }

        /* energy waves */
        .ew-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .ew-pulse {
          animation-name: ewTravel;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .ew-pulse-rev {
          animation-direction: reverse;
        }
        @keyframes ewTravel {
          from { stroke-dashoffset: 1000; }
          to   { stroke-dashoffset: 0; }
        }

        /* dashboard preview */
        .dash-wrap {
          position: relative;
          width: 100%;
          max-width: 980px;
          perspective: 1400px;
        }
        .dash-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(60% 60% at 50% 40%, rgba(37,99,235,0.16), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }
        .dash-glass {
          position: relative;
          border-radius: 24px;
          background: rgba(255,255,255,0.86);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(226,232,240,0.9);
          box-shadow:
            0 30px 60px -20px rgba(15,23,42,0.18),
            0 0 0 1px rgba(255,255,255,0.4) inset;
          overflow: hidden;
          animation: dashFloat 7s ease-in-out infinite;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .dash-glass:hover {
          transform: scale(1.01);
          box-shadow:
            0 36px 70px -20px rgba(15,23,42,0.22),
            0 0 0 1px rgba(255,255,255,0.5) inset;
        }
        @keyframes dashFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .dash-reflection {
          position: absolute;
          top: -50%;
          left: -20%;
          width: 60%;
          height: 200%;
          background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%);
          transform: rotate(8deg);
          animation: dashSheen 9s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes dashSheen {
          0%   { left: -30%; }
          50%  { left: 110%; }
          100% { left: 110%; }
        }

        /* reduced motion */
        .reduced-motion .ew-pulse,
        .reduced-motion .badge-dot,
        .reduced-motion .dash-glass,
        .reduced-motion .dash-reflection {
          animation: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .ew-pulse, .badge-dot, .dash-glass, .dash-reflection {
            animation: none !important;
          }
        }

        @media (max-width: 640px) {
          .glow-blue, .glow-violet, .glow-cyan { filter: blur(70px); }
        }
      `}</style>
        </section>
    );
}