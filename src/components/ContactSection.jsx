import React, { useState } from "react";
import {
    FiPhone,
    FiMail,
    FiSend,
    FiUser,
    FiMessageSquare,
    FiSmartphone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Contact Us — light theme.
 * Left: reachable contact channels (call, email, WhatsApp) as tap/click
 * targets. Right: a contact form. Built on the shared design tokens so it
 * stays in sync with the rest of the site.
 *
 * Swap the placeholder phone number, email, and WhatsApp link for the real
 * ones before shipping.
 */

const CONTACT_METHODS = [
    {
        icon: FiPhone,
        label: "Call us",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: FiMail,
        label: "Email us",
        value: "hello@aurora.ai",
        href: "mailto:hello@aurora.ai",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "Chat with us",
        href: "https://wa.me/919876543210",
    },
];

export default function ContactSection() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !form.mobile || !form.message)
            return;
        // Wire this up to your backend / form service.
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
    }

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
                        Contact
                    </h2>
                    <div className="hidden xs:flex items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary),0_0_20px_var(--color-primary)]" />
                        <div className="w-10 sm:w-20 h-0.5 bg-linear-to-l from-transparent via-primary to-secondary" />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-text font-bold text-3xl sm:text-4xl mb-4">
                        Let's Talk
                    </h2>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                        Have a project in mind or just a question? Reach out however's
                        easiest — we usually reply within a few hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-6">

                    {/* Left: contact channels */}
                    <div className="flex flex-col gap-4">
                        {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon size={20} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-0.5">
                                        {label}
                                    </p>
                                    <p className="text-text font-semibold text-[15px] truncate">
                                        {value}
                                    </p>
                                </div>
                            </a>
                        ))}

                        {/* Supporting note card */}
                        <div className="rounded-2xl bg-linear-to-br from-primary to-secondary p-6 mt-2 flex-1 flex flex-col justify-center min-h-[140px]">
                            <p className="text-white font-semibold text-base mb-1.5">
                                Prefer a quick chat?
                            </p>
                            <p className="text-white/85 text-sm leading-relaxed">
                                WhatsApp is the fastest way to reach us — most messages get a
                                reply within the hour, during business hours.
                            </p>
                        </div>
                    </div>

                    {/* Right: contact form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label
                                    htmlFor="contact-first-name"
                                    className="block text-xs font-medium text-text-muted mb-1.5"
                                >
                                    First name
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-bg px-3.5 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                                    <FiUser size={15} className="text-text-muted shrink-0" />
                                    <input
                                        id="contact-first-name"
                                        name="firstName"
                                        type="text"
                                        required
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Jane"
                                        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted/60 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-last-name"
                                    className="block text-xs font-medium text-text-muted mb-1.5"
                                >
                                    Last name
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-bg px-3.5 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                                    <FiUser size={15} className="text-text-muted shrink-0" />
                                    <input
                                        id="contact-last-name"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted/60 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="block text-xs font-medium text-text-muted mb-1.5"
                                >
                                    Email address
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-bg px-3.5 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                                    <FiMail size={15} className="text-text-muted shrink-0" />
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="jane@company.com"
                                        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted/60 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-mobile"
                                    className="block text-xs font-medium text-text-muted mb-1.5"
                                >
                                    Mobile number
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-bg px-3.5 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                                    <FiSmartphone size={15} className="text-text-muted shrink-0" />
                                    <input
                                        id="contact-mobile"
                                        name="mobile"
                                        type="tel"
                                        required
                                        value={form.mobile}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted/60 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="contact-message"
                                className="block text-xs font-medium text-text-muted mb-1.5"
                            >
                                Message
                            </label>
                            <div className="flex items-start gap-2.5 rounded-xl border border-border bg-bg px-3.5 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                                <FiMessageSquare size={15} className="text-text-muted shrink-0 mt-0.5" />
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us a bit about what you need..."
                                    className="w-full bg-transparent text-sm text-text placeholder:text-text-muted/60 focus:outline-none resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-[0_8px_20px_-8px_var(--color-primary)] hover:-translate-y-0.5 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        >
                            Send message
                            <FiSend size={15} />
                        </button>

                        <p
                            className={`text-sm mt-3 transition-opacity duration-300 ${submitted ? "opacity-100 text-emerald-600" : "opacity-0"
                                }`}
                            role="status"
                        >
                            Thanks — we'll be in touch shortly.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}