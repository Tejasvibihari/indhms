import React, { useEffect, useState } from "react";
import { FiZap, FiMenu, FiX } from "react-icons/fi";

/**
 * Site navbar — sticky, light theme, built on the shared design tokens.
 * Logo + nav links on the left/center, a fully-rounded (pill) CTA button
 * on the right. Collapses into a slide-down menu on mobile.
 */

const NAV_LINKS = ["Features", "Benefits", "Pricing", "Resources", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 8);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-18">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 shrink-0">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-primary to-secondary text-white shadow-[0_6px_16px_-6px_var(--color-primary)]">
                        <FiZap size={16} />
                    </span>
                    <span className="text-text font-bold text-lg tracking-tight">
                        Aurora
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((label) => (
                        <li key={label}>
                            <a
                                href="#"
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right side: CTA (desktop) + hamburger (mobile) */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_20px_-8px_var(--color-primary)] hover:-translate-y-0.5 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                        Get Started
                    </button>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text hover:border-primary/40 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                        {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden bg-surface border-b border-border transition-[max-height,opacity] duration-300 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col px-4 sm:px-6 py-4 gap-1">
                    {NAV_LINKS.map((label) => (
                        <li key={label}>
                            <a
                                href="#"
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 text-[15px] font-medium text-text-muted hover:text-primary transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-3">
                        <button
                            type="button"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_20px_-8px_var(--color-primary)] transition-transform duration-200 active:scale-[0.98]"
                        >
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}