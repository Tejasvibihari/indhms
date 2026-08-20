import React from "react";

/**
 * Custom hospital/medical icon set — hand-built line-art SVGs so the whole
 * site shares one consistent visual language instead of mixing generic
 * react-icons glyphs. Every icon accepts `size` + standard SVG props and
 * defaults to `currentColor`, so it inherits gradient text/fill tricks and
 * theme colors the same way the rest of the design system does.
 *
 * Usage: <IconHospitalCross size={20} className="text-primary" />
 */

const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

/* Brand mark — rounded hospital cross, used in Header/Footer logo badge */
export function IconHospitalCross({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path
                fill="currentColor"
                stroke="none"
                d="M10 3.5h4a1 1 0 0 1 1 1V9h4.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H15v4.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V15H4.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1H9V4.5a1 1 0 0 1 1-1Z"
            />
        </svg>
    );
}

/* Patient records / clipboard */
export function IconClipboardPulse({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="5" y="4" width="14" height="17" rx="2.2" />
            <path d="M9 4V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2V4" />
            <path d="M7.5 13.5h2.3l1.2-2.6 1.6 4.6 1.3-2h2.6" />
        </svg>
    );
}

/* Appointments / scheduling */
export function IconCalendarCheck({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
            <path d="M3.5 9.5h17" />
            <path d="M8 3v3.4M16 3v3.4" />
            <path d="M8.5 14.2l1.9 1.9 4-4" />
        </svg>
    );
}

/* Pharmacy / medication */
export function IconPillBottle({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="7" y="3.2" width="10" height="17.6" rx="3" />
            <path d="M7 9.5h10" />
            <path d="M9.5 3.2V2.3h5v.9" />
        </svg>
    );
}

/* Lab / diagnostics */
export function IconFlask({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M10 3h4" />
            <path d="M10.5 3v6.2L5.8 18a2 2 0 0 0 1.8 2.9h8.8a2 2 0 0 0 1.8-2.9l-4.7-8.8V3" />
            <path d="M8 15.5h8" />
        </svg>
    );
}

/* Billing / invoice */
export function IconReceipt({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M6 3.5h12v17l-2.2-1.5-2.1 1.5-2.2-1.5-2.1 1.5-2.2-1.5L6 20.5Z" />
            <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
        </svg>
    );
}

/* Bed / ward management */
export function IconBed({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M3 19v-8.5A1.5 1.5 0 0 1 4.5 9H11v3" />
            <path d="M3 15.5h18V19" />
            <path d="M11 12h8.5A1.5 1.5 0 0 1 21 13.5V19" />
            <circle cx="7" cy="11.3" r="1.3" />
            <path d="M3 19v1.5M21 19v1.5" />
        </svg>
    );
}

/* Multi-branch / hospital network */
export function IconBuildings({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M4 21V8.5L11 4v17" />
            <path d="M11 8.5 20 12v9" />
            <path d="M7 11h1M7 14h1M7 17h1" />
            <path d="M14.5 14.5h1M14.5 17.5h1" />
        </svg>
    );
}

/* Security / compliance */
export function IconShieldCheck({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M12 3.2 5 5.8v5.4c0 4.8 3 8.1 7 9.6 4-1.5 7-4.8 7-9.6V5.8Z" />
            <path d="M9 12l2 2 4-4.3" />
        </svg>
    );
}

/* Staff / users */
export function IconUsersMed({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 20v-1.2A4.8 4.8 0 0 1 8.3 14h1.4a4.8 4.8 0 0 1 4.8 4.8V20" />
            <circle cx="17" cy="8.5" r="2.3" />
            <path d="M15.8 14.2A4.3 4.3 0 0 1 20.5 18v2" />
        </svg>
    );
}

/* Analytics / insights */
export function IconChartPulse({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M4 20V4" />
            <path d="M4 20h16" />
            <path d="M7 17V12M11 17v-8M15 17v-4.5M19 17V9" />
        </svg>
    );
}

/* Heartbeat / vitals monitor */
export function IconHeartPulse({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M3.5 12.5h3.2l1.6-3.4 2.4 6.8 1.8-4.6 1.3 1.2h6.7" />
            <path d="M12 20s-6.8-4-8.7-8.2C1.8 8.6 3.4 5.5 6.4 5A4 4 0 0 1 12 7a4 4 0 0 1 5.6-2c3 .5 4.6 3.6 3.1 6.8C18.8 16 12 20 12 20Z" />
        </svg>
    );
}

/* Phone / talk to sales */
export function IconPhoneCall({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M6.5 3.5h3l1.4 4-2 1.6a11.5 11.5 0 0 0 5.5 5.5l1.6-2 4 1.4v3a1.6 1.6 0 0 1-1.7 1.6A16.5 16.5 0 0 1 4.9 5.2a1.6 1.6 0 0 1 1.6-1.7Z" />
        </svg>
    );
}

/* Mail */
export function IconMail({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
            <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
    );
}

/* Chat / WhatsApp-style */
export function IconChat({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M12 3.5c4.7 0 8.5 3.2 8.5 7.2 0 4-3.8 7.2-8.5 7.2a9.8 9.8 0 0 1-2.6-.35L4.5 19l1.2-3.4A6.9 6.9 0 0 1 3.5 10.7c0-4 3.8-7.2 8.5-7.2Z" />
            <path d="M8.3 10.5h7.4M8.3 13h5" />
        </svg>
    );
}

/* Message / contact form */
export function IconMessage({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M4 5.5h16v10.2H9.2L5 19.3V15.7H4Z" />
        </svg>
    );
}

/* Person / contact name field */
export function IconUser({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <circle cx="12" cy="8" r="3.4" />
            <path d="M5 20v-.8A5.2 5.2 0 0 1 10.2 14h3.6A5.2 5.2 0 0 1 19 19.2v.8" />
        </svg>
    );
}

/* Building / hospital name field */
export function IconBuilding({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
            <path d="M9 7.5h1.2M13.8 7.5H15M9 11h1.2M13.8 11H15M9 14.5h1.2M13.8 14.5H15" />
            <path d="M10 20.5V17h4v3.5" />
        </svg>
    );
}

/* Arrow up-right, for CTAs / "explore more" links */
export function IconArrowUpRight({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M7 17 17 7M9 7h8v8" />
        </svg>
    );
}

/* Check circle, for feature/benefit lists on secondary pages */
export function IconCheckCircle({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="m8.3 12.3 2.3 2.3 5-5.3" />
        </svg>
    );
}

/* Chevron down, for accordions */
export function IconChevronDown({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

/* Send, for form submit */
export function IconSend({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M4 12 20.5 4 15 20l-3.5-6.5L4 12Z" />
        </svg>
    );
}

/* Menu / close, for mobile nav */
export function IconMenu({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}
export function IconClose({ size = 20, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M6 6l12 12M18 6 6 18" />
        </svg>
    );
}

/* Search */
export function IconSearch({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m20 20-4.3-4.3" />
        </svg>
    );
}

/* Phone number input icon */
export function IconSmartphone({ size = 18, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
            <path d="M11 18.2h2" />
        </svg>
    );
}

/* Social placeholders (kept generic/geometric so no third-party marks) */
export function IconSocialX({ size = 16, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <path d="M5 5l14 14M19 5 5 19" />
        </svg>
    );
}
export function IconSocialLinked({ size = 16, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M8.3 10.5v6M8.3 8v.02M12 16.5v-3.6a2.1 2.1 0 0 1 4.2 0v3.6M12 12.9v3.6" />
        </svg>
    );
}
export function IconSocialGlobe({ size = 16, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
        </svg>
    );
}
export function IconSocialInsta({ size = 16, className = "", ...props }) {
    return (
        <svg width={size} height={size} className={className} {...base} {...props}>
            <rect x="4" y="4" width="16" height="16" rx="5" />
            <circle cx="12" cy="12" r="3.6" />
            <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}
