import React, { useState } from "react";
import { FiChevronDown, FiMessageCircle, FiMail } from "react-icons/fi";

/**
 * FAQ — IndHMS (hospital management software).
 * Single-open accordion, built on the shared design tokens. The expand
 * animation uses the CSS grid-rows 0fr/1fr trick so it animates smoothly
 * without measuring content height in JS.
 */

const FAQS = [
    {
        question: "What is IndHMS and who is it built for?",
        answer:
            "IndHMS is a hospital management platform that brings patient records, appointments, billing, pharmacy, and lab workflows into one system. It's built for hospitals, multi-specialty clinics, and diagnostic centers of any size — from a single facility to a multi-branch network.",
    },
    {
        question: "Does IndHMS handle patient records, billing, and appointments in one place?",
        answer:
            "Yes. Registration, OPD/IPD records, appointment scheduling, pharmacy and lab orders, and billing all run on one shared patient record, so staff aren't re-entering the same information across separate systems.",
    },
    {
        question: "Is patient data secure and compliant with healthcare regulations?",
        answer:
            "Patient data is encrypted at rest and in transit, access is role-based so staff only see what their role requires, and every record carries a full audit trail. IndHMS is built to align with India's ABDM (Ayushman Bharat Digital Mission) data standards.",
    },
    {
        question: "Can IndHMS integrate with our existing lab and pharmacy systems?",
        answer:
            "IndHMS supports integration with common lab (LIS) and pharmacy systems, as well as insurance and TPA workflows, through standard APIs. If you're on a specific vendor system, our team can confirm compatibility before onboarding.",
    },
    {
        question: "Is IndHMS cloud-based, or do we need on-premise servers?",
        answer:
            "Both are available. Most hospitals run IndHMS on the cloud for automatic backups and remote access across branches, but an on-premise deployment is available for facilities that require local hosting.",
    },
    {
        question: "How long does onboarding and staff training take?",
        answer:
            "A single-facility rollout typically takes 2–3 weeks, including data migration and staff training. Larger, multi-branch deployments are phased branch by branch so daily operations are never disrupted.",
    },
    {
        question: "Can we manage multiple hospital branches from one account?",
        answer:
            "Yes. A central admin view lets you monitor occupancy, billing, and inventory across every branch, while each branch keeps its own day-to-day workflow and staff permissions.",
    },
    {
        question: "What support is available after go-live?",
        answer:
            "Every plan includes onboarding support and access to our helpdesk over call, email, and WhatsApp. Higher-tier plans add a dedicated account manager and priority response times.",
    },
];

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <div
            className={`rounded-xl border bg-surface transition-colors duration-300 ${isOpen ? "border-primary/40 shadow-sm" : "border-border"
                }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
            >
                <span className="text-text font-semibold text-[15px] sm:text-base">
                    {item.question}
                </span>
                <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg border shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-primary border-primary text-white rotate-180"
                        : "bg-bg border-border text-text-muted"
                        }`}
                >
                    <FiChevronDown size={16} />
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out px-5 sm:px-6 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-4 sm:pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed pr-6">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    function toggle(i) {
        setOpenIndex((current) => (current === i ? -1 : i));
    }

    return (
        <section className="w-full bg-bg py-16 sm:py-24 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 sm:gap-8 mb-6 justify-center">
                    <div className="hidden xs:flex items-center">
                        <div className="w-10 sm:w-20 h-0.5 bg-linear-to-r from-transparent via-primary to-secondary" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
                    </div>
                    <h2 className="text-primary text-xl sm:text-2xl font-semibold tracking-wide uppercase">
                        FAQ
                    </h2>
                    <div className="hidden xs:flex items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
                        <div className="w-10 sm:w-20 h-0.5 bg-linear-to-l from-transparent via-primary to-secondary" />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
                    <h2 className="text-text font-bold text-3xl sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                        Everything hospital administrators usually ask before switching
                        to IndHMS. Don't see your question? Reach out below.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {FAQS.map((item, i) => (
                        <AccordionItem
                            key={item.question}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </div>

                {/* Still have questions CTA */}
                <div className="mt-10 sm:mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                    <div>
                        <p className="text-text font-semibold text-base sm:text-lg mb-1">
                            Still have questions?
                        </p>
                        <p className="text-text-muted text-sm">
                            Our team can walk you through IndHMS for your specific setup.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <a
                            href="mailto:hello@indhms.com"
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-text border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200"
                        >
                            <FiMail size={15} />
                            Email us
                        </a>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_20px_-8px_var(--color-primary)] hover:-translate-y-0.5 transition-transform duration-200"
                        >
                            <FiMessageCircle size={15} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}