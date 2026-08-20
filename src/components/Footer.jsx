import React from "react";
import { Link } from "react-router-dom";
import {
    FiTwitter,
    FiLinkedin,
    FiGithub,
    FiInstagram,
    FiZap,
} from "react-icons/fi";

/**
 * Site footer — light theme, built entirely on the shared design tokens
 * (bg / surface / border / text / text-muted / primary / secondary) so it
 * stays in sync with the rest of the site when index.css changes.
 */

const LINK_COLUMNS = [
    {
        title: "Product",
        links: [["Features", "/features"], ["Benefits", "/benefits"], ["Pricing", "/pricing"], ["Integrations", "/integrations"]],
    },
    {
        title: "Company",
        links: [["About", "/about"], ["Careers", "/careers"], ["Blog", "/blog"], ["Contact", "/contact"]],
    },
    {
        title: "Resources",
        links: [["Documentation", "/documentation"], ["Support", "/support"], ["FAQs", "/faqs"], ["Community", "/community"]],
    },
];

const SOCIALS = [
    { icon: FiTwitter, label: "Twitter" },
    { icon: FiLinkedin, label: "LinkedIn" },
    { icon: FiGithub, label: "GitHub" },
    { icon: FiInstagram, label: "Instagram" },
];

const LEGAL_LINKS = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Cookie Policy", "/cookie-policy"]];

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-text font-semibold text-sm tracking-wide uppercase mb-4">
                {title}
            </h3>
            <ul className="space-y-2.5">
                {links.map(([label, to]) => (
                    <li key={label}>
                        <Link
                            to={to}
                            className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="relative w-full bg-surface border-t border-border overflow-hidden">
            {/* subtle brand hairline across the top edge */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary to-secondary opacity-60" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 lg:gap-8">

                    {/* Brand column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-primary to-secondary text-white shadow-[0_6px_16px_-6px_var(--color-primary)]">
                                <FiZap size={16} />
                            </span>
                            <span className="text-text font-bold text-lg tracking-tight">
                                Aurora
                            </span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
                            We build intelligent digital products and automate complex
                            workflows so businesses can scale with AI-powered technology.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {SOCIALS.map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {LINK_COLUMNS.map((col) => (
                        <FooterColumn key={col.title} title={col.title} links={col.links} />
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 sm:mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-text-muted text-center sm:text-left">
                        © {new Date().getFullYear()} Aurora. All rights reserved.
                    </p>
                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {LEGAL_LINKS.map(([label, to]) => (
                            <li key={label}>
                                <Link
                                    to={to}
                                    className="text-xs text-text-muted hover:text-primary transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}