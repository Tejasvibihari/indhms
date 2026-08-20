import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SitePage({ eyebrow, title, description, sections = [], cta = "Book a demo", children, showSections = true }) {
    return (
        <>
            <Header />
            <main>
                <section className="relative overflow-hidden bg-bg px-4 py-20 sm:py-28">
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-secondary opacity-70" />
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
                        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">{title}</h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">{description}</p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_var(--color-primary)] transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            {cta}
                            <FiArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {children}

                {showSections && <section className="bg-surface px-4 py-16 sm:py-24">
                    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                        {sections.map((section) => (
                            <article key={section.title} className="rounded-2xl border border-border bg-bg p-6 shadow-sm sm:p-8">
                                <FiCheckCircle className="mb-5 text-primary" size={22} />
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
        </>
    );
}
