import React, { useEffect, useRef, useState } from "react";
import {
  IconClipboardPulse,
  IconCalendarCheck,
  IconPillBottle,
  IconFlask,
  IconReceipt,
  IconArrowUpRight,
} from "./icons/MedicalIcons";
import { Link } from "react-router-dom";

/**
 * Feature Spotlight — rebuilt around real hospital-management modules.
 * A split-panel, auto-advancing tab switcher: the left rail lists modules,
 * the right panel renders a live code-built mockup per module (no image
 * assets required) with a glowing progress rail that echoes the site's
 * "energy line" motif from the hero.
 */

const FEATURES = [
  {
    id: "records",
    icon: IconClipboardPulse,
    title: "Patient Records",
    summary: "One unified chart across OPD, IPD, and every visit.",
    detail:
      "Registration, history, vitals, and prescriptions live on a single patient file — accessible instantly to every department that needs it, without duplicate paperwork.",
  },
  {
    id: "appointments",
    icon: IconCalendarCheck,
    title: "Appointments & OPD",
    summary: "Book, reschedule, and track visits across every doctor.",
    detail:
      "Patients and staff can book slots online or at the desk. Doctors see a live queue, no-shows drop, and reminders go out automatically by SMS or WhatsApp.",
  },
  {
    id: "pharmacy",
    icon: IconPillBottle,
    title: "Pharmacy & Inventory",
    summary: "Stock, expiry, and dispensing tracked in real time.",
    detail:
      "Every prescription checks live stock before dispensing. Low-stock and near-expiry alerts keep the pharmacy counter running without manual audits.",
  },
  {
    id: "lab",
    icon: IconFlask,
    title: "Lab & Diagnostics",
    summary: "Orders, results, and reports without the paper trail.",
    detail:
      "Doctors order tests directly from the patient file, technicians log results against the same order, and reports sync back automatically — no re-typing.",
  },
  {
    id: "billing",
    icon: IconReceipt,
    title: "Billing & Insurance",
    summary: "One bill across consultations, pharmacy, and lab.",
    detail:
      "Charges from every department roll into a single itemized bill, with TPA and insurance claim workflows built in — so discharge doesn't wait on finance.",
  },
];

const AUTO_ADVANCE_MS = 5200;

/* ---------------------------------------------------------------- */
/*  Right-panel mockups — one small, distinct visual per module      */
/* ---------------------------------------------------------------- */

function RecordsMock() {
  const rows = [
    { label: "Vitals recorded", w: "92%" },
    { label: "Allergy check", w: "100%" },
    { label: "Prescription synced", w: "78%" },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between rounded-lg border border-border bg-bg px-3 py-2 mb-4">
        <span className="text-xs font-semibold text-text">Rohan Mehta · OPD #4821</span>
        <span className="text-[10px] rounded-full bg-emerald-500/10 text-emerald-600 px-2 py-0.5 font-medium">
          Active
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
            <span className="text-[10px] text-text-muted shrink-0 w-28 text-right">
              {r.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppointmentsMock() {
  const slots = [
    { time: "9:30 AM", name: "A. Kapoor", status: "Checked in" },
    { time: "10:00 AM", name: "S. Iyer", status: "Waiting" },
    { time: "10:30 AM", name: "P. Nair", status: "Upcoming" },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
          Dr. Sharma · Today
        </span>
        <span className="text-[10px] rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">
          12 booked
        </span>
      </div>
      <div className="space-y-2">
        {slots.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-border bg-bg px-3 py-2.5"
          >
            <span className="text-[11px] font-semibold text-text w-16 shrink-0">{s.time}</span>
            <span className="text-xs text-text flex-1 truncate">{s.name}</span>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${s.status === "Checked in"
                ? "bg-emerald-500/10 text-emerald-600"
                : s.status === "Waiting"
                  ? "bg-amber-500/10 text-amber-600"
                  : "bg-border text-text-muted"
                }`}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PharmacyMock() {
  const items = [
    { name: "Paracetamol 500mg", stock: 82, low: false },
    { name: "Amoxicillin 250mg", stock: 14, low: true },
    { name: "Insulin (Rapid)", stock: 6, low: true },
  ];
  return (
    <div className="w-full space-y-2.5">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border bg-bg px-3 py-2.5"
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-text truncate">{it.name}</p>
            <div className="h-1.5 rounded-full bg-border/70 overflow-hidden mt-1.5">
              <div
                className={`h-full rounded-full ${it.low ? "bg-amber-500" : "bg-linear-to-r from-primary to-secondary"}`}
                style={{ width: `${Math.min(it.stock, 100)}%` }}
              />
            </div>
          </div>
          <span
            className={`text-[10px] font-semibold shrink-0 ${it.low ? "text-amber-600" : "text-text-muted"}`}
          >
            {it.stock} units
          </span>
        </div>
      ))}
    </div>
  );
}

function LabMock() {
  const claims = [
    { text: "CBC — results ready", ok: true },
    { text: "Lipid Profile — in progress", ok: null },
    { text: "X-Ray Chest — awaiting sample", ok: false },
  ];
  return (
    <div className="w-full space-y-2.5">
      {claims.map((c, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 rounded-lg border border-border bg-bg px-3 py-2.5"
        >
          <span
            className={`mt-1 w-2 h-2 rounded-full shrink-0 ${c.ok === true ? "bg-emerald-500" : c.ok === false ? "bg-border" : "bg-amber-500"
              }`}
          />
          <span className="text-xs text-text leading-snug">{c.text}</span>
        </div>
      ))}
    </div>
  );
}

function BillingMock() {
  const lines = ["Consultation — ₹500", "Pharmacy — ₹1,240", "Lab tests — ₹2,100"];
  return (
    <div className="w-full">
      <div className="space-y-2 mb-4">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className="text-text-muted">{l.split(" — ")[0]}</span>
            <span className="text-text font-medium">{l.split(" — ")[1]}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-linear-to-r from-primary to-secondary px-3 py-2.5">
        <span className="text-xs font-medium text-white">Total due</span>
        <span className="text-sm font-bold text-white">₹3,840</span>
      </div>
    </div>
  );
}

const MOCKS = {
  records: RecordsMock,
  appointments: AppointmentsMock,
  pharmacy: PharmacyMock,
  lab: LabMock,
  billing: BillingMock,
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
            Features
          </h2>
          <div className="hidden xs:flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
            <div className="w-10 sm:w-20 h-0.5 bg-linear-to-l from-transparent via-primary to-secondary" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-text font-bold text-3xl sm:text-4xl mb-4">
            Every Department, One System
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            From the front desk to the billing counter, each module hands off
            cleanly to the next — no re-entry, no lost paperwork.
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
                      <Icon size={17} />
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
          <Link
            to="/features"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_24px_-8px_var(--color-primary)] hover:-translate-y-0.5 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            See all features
            <IconArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
