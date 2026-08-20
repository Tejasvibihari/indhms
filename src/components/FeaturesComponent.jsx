import React, { useEffect, useRef, useState } from "react";
import {
  FiSearch,
  FiEdit3,
  FiCheckCircle,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

/**
 * Feature Spotlight
 * A split-panel, auto-advancing tab switcher — deliberately different from
 * the card-grid layouts already used for Benefits / Features. The left rail
 * lists capabilities; the right panel renders a live code-built mockup per
 * feature (no image assets required) with a glowing progress rail that
 * echoes the site's existing "energy line" motif.
 */

const FEATURES = [
  {
    id: "research",
    icon: FiSearch,
    title: "Smart Research",
    summary: "Gathers relevant sources from across the web in seconds.",
    detail:
      "Give it a topic and a few keywords — it scans the web, ranks sources by relevance, and hands you a clean, cited briefing instead of forty open tabs.",
  },
  {
    id: "draft",
    icon: FiEdit3,
    title: "Instant Drafting",
    summary: "Turns a rough outline into a publish-ready first draft.",
    detail:
      "Feed it your outline and tone of voice. It writes a structured first draft you can edit, not a wall of text you have to rewrite from scratch.",
  },
  {
    id: "verify",
    icon: FiCheckCircle,
    title: "Fact-Check & Cite",
    summary: "Flags weak claims and attaches a source to every one.",
    detail:
      "Every factual claim gets checked against trusted sources in real time, with a citation attached — so nothing ships that you can't stand behind.",
  },
  {
    id: "publish",
    icon: FiSend,
    title: "One-Click Publish",
    summary: "Schedules and pushes content to every channel at once.",
    detail:
      "Pick the channels, set the time, and it formats and schedules the piece for each one — no more copy-pasting the same post five different ways.",
  },
];

const AUTO_ADVANCE_MS = 5200;

/* ---------------------------------------------------------------- */
/*  Right-panel mockups — one small, distinct visual per feature     */
/* ---------------------------------------------------------------- */

function ResearchMock() {
  const rows = [
    { w: "88%", tag: "nature.com" },
    { w: "72%", tag: "arxiv.org" },
    { w: "80%", tag: "reuters.com" },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 mb-4">
        <FiSearch className="text-text-muted shrink-0" size={14} />
        <span className="text-xs text-text-muted">
          renewable energy storage 2026
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <div className="flex-1 h-2 rounded-full bg-border/70 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary to-secondary"
                style={{ width: r.w }}
              />
            </div>
            <span className="text-[10px] text-text-muted shrink-0 w-16 text-right">
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DraftMock() {
  const lines = ["w-full", "w-11/12", "w-4/5", "w-full", "w-2/3"];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
          Draft.md
        </span>
        <span className="text-[10px] rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">
          482 words
        </span>
      </div>
      <div className="space-y-2">
        {lines.map((w, i) => (
          <div
            key={i}
            className={`h-2 rounded-full bg-border/70 ${w} ${i === lines.length - 1 ? "relative" : ""
              }`}
          >
            {i === lines.length - 1 && (
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-primary cursor-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VerifyMock() {
  const claims = [
    { text: "Battery costs fell 14% YoY", ok: true },
    { text: "Grid demand up in 3 regions", ok: true },
    { text: "Adoption doubled since 2023", ok: false },
  ];
  return (
    <div className="w-full space-y-2.5">
      {claims.map((c, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 rounded-lg border border-border bg-bg px-3 py-2.5"
        >
          <FiCheckCircle
            size={14}
            className={`mt-0.5 shrink-0 ${c.ok ? "text-emerald-500" : "text-amber-500"
              }`}
          />
          <span className="text-xs text-text leading-snug">{c.text}</span>
        </div>
      ))}
    </div>
  );
}

function PublishMock() {
  const channels = ["Blog", "LinkedIn", "X", "Newsletter"];
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-4">
        {channels.map((c) => (
          <span
            key={c}
            className="text-[11px] font-medium rounded-full border border-primary/30 bg-primary/5 text-primary px-3 py-1"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2.5 rounded-lg bg-linear-to-r from-primary to-secondary px-3 py-2.5">
        <FiSend size={14} className="text-white shrink-0" />
        <span className="text-xs font-medium text-white">
          Scheduled for 9:00 AM · all channels
        </span>
      </div>
    </div>
  );
}

const MOCKS = {
  research: ResearchMock,
  draft: DraftMock,
  verify: VerifyMock,
  publish: PublishMock,
};

/* ---------------------------------------------------------------- */
/*  Main section                                                     */
/* ---------------------------------------------------------------- */

export default function FeatureSpotlight() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % FEATURES.length);
      setProgressKey((k) => k + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
  }, [active, progressKey, reducedMotion]);

  function selectTab(i) {
    if (i === active) return;
    setActive(i);
    setProgressKey((k) => k + 1);
  }

  const ActiveMock = MOCKS[FEATURES[active].id];

  return (
    <section className="w-full bg-bg py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 sm:gap-8 mb-6 justify-center">
          <div className="hidden xs:flex items-center">
            <div className="w-10 sm:w-20 h-0.5 bg-linear-to-r from-transparent via-primary to-secondary" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
          </div>
          <h2 className="text-primary text-xl sm:text-2xl font-semibold tracking-wide uppercase">
            Capabilities
          </h2>
          <div className="hidden xs:flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
            <div className="w-10 sm:w-20 h-0.5 bg-linear-to-l from-transparent via-primary to-secondary" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-text font-bold text-3xl sm:text-4xl mb-4">
            One assistant, every step
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            From the first search to the final publish, each capability hands
            off cleanly to the next.
          </p>
        </div>

        {/* Split panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-4 items-stretch">
          {/* Left: tab list */}
          <div className="flex flex-col gap-2">
            {FEATURES.map((f, i) => {
              const isActive = i === active;
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => selectTab(i)}
                  className={`group relative text-left rounded-xl border px-5 py-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive
                    ? "bg-surface border-primary/40 shadow-md"
                    : "bg-transparent border-transparent hover:bg-surface/60"
                    }`}
                >
                  {/* progress rail */}
                  <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-border overflow-hidden">
                    {isActive && !reducedMotion && (
                      <span
                        key={progressKey}
                        className="block w-full bg-linear-to-b from-primary to-secondary tab-progress"
                        style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                      />
                    )}
                    {isActive && reducedMotion && (
                      <span className="block w-full h-full bg-primary" />
                    )}
                  </span>

                  <div className="flex items-start gap-3 pl-3">
                    <span
                      className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border transition-colors duration-300 ${isActive
                        ? "bg-primary border-primary text-white"
                        : "bg-bg border-border text-text-muted group-hover:text-primary"
                        }`}
                    >
                      <Icon size={16} />
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`text-[15px] font-semibold mb-0.5 transition-colors duration-300 ${isActive ? "text-text" : "text-text-muted"
                          }`}
                      >
                        {f.title}
                      </h3>
                      <p
                        className={`text-[13px] leading-snug transition-colors duration-300 ${isActive ? "text-text-muted" : "text-text-muted/70"
                          }`}
                      >
                        {f.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: live preview */}
          <div className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[320px]">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                {FEATURES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"
                      }`}
                  />
                ))}
              </div>

              <ActiveMock />
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-border">
              <p className="text-sm text-text-muted leading-relaxed">
                {FEATURES[active].detail}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_24px_-8px_var(--color-primary)] hover:-translate-y-0.5 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
            See it in action
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <style>{`
        .cursor-blink {
          animation: cursorBlink 1s steps(1) infinite;
        }
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .tab-progress {
          height: 0%;
          animation-name: tabFill;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes tabFill {
          from { height: 0%; }
          to   { height: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-blink { animation: none !important; opacity: 1; }
        }
      `}</style>
    </section>
  );
}