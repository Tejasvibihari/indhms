import React from "react";
import {
  IconArrowUpRight,
  IconUsersMed,
  IconChartPulse,
  IconShieldCheck,
  IconBuildings,
  IconHeartPulse,
} from "./icons/MedicalIcons";
import { Link } from "react-router-dom";

/**
 * Benefits — Bento layout
 * One large hero card, a stat callout (echoing the "97% satisfaction"
 * figure from the hero dashboard), two compact icon cards, and two wide
 * horizontal cards — all rewritten around real hospital-operations
 * benefits instead of generic SaaS copy.
 */

function HeroBenefitCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[280px] lg:min-h-0 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-linear-to-br from-primary/10 to-secondary/10 blur-2xl pointer-events-none" />
      <div className="relative z-10 max-w-[78%] sm:max-w-[70%]">
        <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
          Unified Records
        </span>
        <h3 className="text-text font-bold text-xl sm:text-2xl mb-3 leading-snug">
          One Patient Record, Every Department
        </h3>
        <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed">
          Registration, OPD/IPD, pharmacy, lab, and billing all read from the
          same patient file — so staff stop re-entering data and doctors get
          the full picture in one screen.
        </p>
      </div>
      <span className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-primary to-secondary text-white shadow-[0_12px_28px_-10px_var(--color-primary)]">
        <IconHeartPulse size={32} />
      </span>
    </div>
  );
}

function StatCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary to-secondary p-6 sm:p-8 col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col justify-center min-h-[160px] lg:min-h-0 shadow-md">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <p className="relative z-10 text-white font-extrabold text-4xl sm:text-5xl leading-none mb-2">
        40%
      </p>
      <p className="relative z-10 text-white/85 text-sm sm:text-[15px] font-medium max-w-[240px]">
        Average reduction in patient billing & discharge time after switching to IndHMS.
      </p>
    </div>
  );
}

function IconCard({ icon: Icon, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-6 col-span-1 flex flex-col justify-center min-h-[160px] lg:min-h-0 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
        <Icon size={19} />
      </span>
      <h3 className="text-text font-bold text-[15px] sm:text-base mb-1.5">
        {title}
      </h3>
      <p className="text-[13px] text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WideCard({ icon: Icon, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-2 flex items-center gap-4 sm:gap-6 min-h-[140px] shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
      <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon size={22} />
      </span>
      <div className="min-w-0">
        <h3 className="text-text font-bold text-[15px] sm:text-base mb-1">
          {title}
        </h3>
        <p className="text-[13px] sm:text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function BenefitsBento() {
  return (
    <section className="w-full bg-bg">
      <div className="flex flex-col w-full justify-center items-center py-14 sm:py-20 px-4">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 sm:gap-8 mb-6">
          <div className="hidden xs:flex items-center">
            <div className="w-10 sm:w-20 h-0.5 bg-linear-to-r from-transparent via-primary to-secondary" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
          </div>
          <h2 className="text-primary text-xl sm:text-2xl font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <div className="hidden xs:flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
            <div className="w-10 sm:w-20 h-0.5 bg-linear-to-l from-transparent via-primary to-secondary" />
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-xl mb-10 sm:mb-14">
          <h2 className="text-text font-bold text-3xl sm:text-4xl my-4 sm:my-6">
            Built for Real Hospital Operations
          </h2>
          <p className="text-text-muted px-2 text-sm sm:text-base leading-relaxed">
            Fewer manual handoffs, cleaner records, and a system every
            department — front desk to finance — actually wants to use.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl
                     lg:grid-rows-[240px_240px_190px]"
        >
          <HeroBenefitCard />
          <StatCard />
          <IconCard
            icon={IconUsersMed}
            title="Less Staff Workload"
            description="Automated scheduling and record lookups free front-desk and nursing staff from repetitive paperwork."
          />
          <IconCard
            icon={IconShieldCheck}
            title="Secure & Compliant"
            description="Role-based access, full audit trails, and data handling aligned with India's ABDM standards."
          />
          <WideCard
            icon={IconChartPulse}
            title="Real-Time Hospital Insights"
            description="Occupancy, revenue, and department performance in one dashboard — decisions backed by live data, not end-of-month reports."
          />
          <WideCard
            icon={IconBuildings}
            title="Manage Every Branch Centrally"
            description="Run a single facility or a multi-branch network from one admin view, with each branch keeping its own workflow."
          />
        </div>

        {/* CTA */}
        <Link
          to="/benefits"
          className="mt-10 text-primary font-semibold py-2.5 px-6 text-base sm:text-lg border border-primary rounded-3xl flex flex-row items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
        >
          Explore More <IconArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>

      </div>
    </section>
  );
}

export default BenefitsBento;
