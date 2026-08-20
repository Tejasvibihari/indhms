const page = (eyebrow, title, description, sections, cta) => ({
    eyebrow,
    title,
    description,
    sections,
    cta,
});

export const PAGE_CONTENT = {
    "/features": page("The platform", "Everything your hospital needs in one place", "IndHMS connects patients, appointments, pharmacy, lab, and billing in one calm operational workspace.", [
        { title: "Patient Records", description: "Keep OPD, IPD, and visit history accurate with one unified patient record.", items: ["Unified patient timeline", "Automated visit summaries", "Real-time record access"] },
        { title: "Front Desk & OPD", description: "Give your staff the context they need to make every registration and consultation effortless.", items: ["Fast check-in and triage", "Doctor queues and slots", "Flexible appointment scheduling"] },
        { title: "Operations", description: "Turn daily hospital operations into a clear, measurable rhythm across every department.", items: ["Pharmacy & lab coordination", "Billing and insurance claims", "Reports that explain performance"] },
    ]),
    "/benefits": page("Why IndHMS", "Run a smoother, more efficient hospital", "Replace disconnected registers and manual follow-ups with a single source of truth for your hospital.", [
        { title: "Less busywork", description: "Automate repetitive record updates so your staff can focus on patients instead of paperwork." },
        { title: "Fewer missed handoffs", description: "See occupancy, billing, and patient status clearly enough to act at the right moment." },
        { title: "A better patient experience", description: "Keep every department aligned from the first appointment to discharge." },
    ]),
    "/pricing": page("Simple pricing", "Choose a plan that grows with your hospital", "Start with the modules you need today and add capability as your beds, staff, and operation expand.", [
        { title: "Essentials", description: "For clinics and small hospitals getting their core workflow under control.", items: ["OPD and appointment calendar", "Patient records", "Basic reports"] },
        { title: "Professional", description: "For growing hospitals that need connected departments and deeper visibility.", items: ["Everything in Essentials", "Pharmacy & lab workflows", "Advanced billing reports"] },
        { title: "Enterprise", description: "For hospital groups that need tailored rollout, permissions, and support.", items: ["Multi-branch operations", "Custom integrations", "Dedicated onboarding"] },
    ], "Request pricing"),
    "/resources": page("Resources", "Practical guidance for modern hospital teams", "Explore product guidance, operational ideas, and answers that help your team get more from IndHMS.", [
        { title: "Learn the workflow", description: "See how the platform supports the complete patient journey, from registration through discharge." },
        { title: "Plan your rollout", description: "Use our implementation guidance to move your team from paper registers to one shared system." },
        { title: "Get expert help", description: "Our support team is ready to answer questions and help you build a workflow around your hospital." },
    ]),
    "/contact": page("Talk to our team", "See IndHMS in your hospital", "Tell us about your hospital and we will show you the workflows that can make the biggest difference first.", [
        { title: "A tailored walkthrough", description: "We will focus the conversation on your departments, patient volume, and current tools." },
        { title: "A clear implementation path", description: "Understand what onboarding looks like, what your team will need, and how quickly you can get started." },
        { title: "Real answers", description: "Bring your operational questions. We will help you evaluate fit without a high-pressure sales process." },
    ], "Start a conversation"),
    "/product-showcase": page("Product showcase", "A live view of your hospital operation", "From the front desk to the back office, IndHMS gives your team a shared view of what is happening now.", [
        { title: "Front desk dashboard", description: "See today's registrations, appointments, bed status, and outstanding requests at a glance." },
        { title: "Pharmacy & lab board", description: "Coordinate prescriptions, stock, and lab orders without calling across departments." },
        { title: "Business overview", description: "Track occupancy, revenue, department load, and trends from one decision-ready view." },
    ]),
    "/how-it-works": page("How it works", "One connected flow from registration to discharge", "IndHMS keeps every handoff visible so your team can spend less time updating registers and more time looking after patients.", [
        { title: "1. Register the patient", description: "Visits land in one record with the demographics, doctor, and department details your team needs." },
        { title: "2. Coordinate the visit", description: "Front desk, pharmacy, lab, and billing work from the same live patient information." },
        { title: "3. Learn and improve", description: "Use clear reports to understand patient flow, revenue, and the moments that shape care quality." },
    ]),
    "/testimonials": page("Customer stories", "Built around the people who run hospitals", "Hear how hospital teams use IndHMS to bring more clarity to busy days and more consistency to every patient visit.", [
        { title: "Independent clinics", description: "Keep the operation professional and coordinated without the overhead of a sprawling toolset." },
        { title: "Growing hospitals", description: "Create repeatable processes that help new staff become effective quickly." },
        { title: "Multi-branch networks", description: "Standardize reporting and visibility while keeping each branch flexible where it matters." },
    ]),
    "/integrations": page("Integrations", "Connect the tools your hospital already uses", "IndHMS is designed to fit into your operation, helping information move cleanly between the systems your team relies on.", [
        { title: "Lab & pharmacy systems", description: "Keep test orders and stock information aligned across your existing LIS and pharmacy vendors." },
        { title: "Payments & insurance", description: "Make billing easier to reconcile with connected payment, TPA, and insurance workflows." },
        { title: "Your future stack", description: "Talk to us about the integrations and data flows that are most important to your hospital." },
    ]),
    "/about": page("About IndHMS", "Technology that respects hospital work", "We are building practical software for the teams who make patient care feel personal, organized, and effortless.", [
        { title: "Operational first", description: "We start with the real pace and constraints of hospital teams, then design the technology around them." },
        { title: "Clear by default", description: "Good software should reduce uncertainty. Every screen is designed to make the next action easier to see." },
        { title: "Built to improve", description: "We listen closely to hospital teams and keep refining the product around what helps them most." },
    ]),
    "/careers": page("Careers", "Help shape the future of hospital operations", "Join a team working on thoughtful tools for one of the world's most human industries.", [
        { title: "Meaningful problems", description: "Work on software that supports real people during real, high-stakes operational moments." },
        { title: "Room to contribute", description: "Bring your perspective, challenge assumptions, and take ownership of work that matters." },
        { title: "Care-first mindset", description: "We value clarity, care, and the habit of making things better for the patient who comes next." },
    ], "Contact our team"),
    "/blog": page("Blog", "Ideas for better hospital operations", "Read practical thinking on healthcare technology, patient experience, and the systems behind great care.", [
        { title: "Operations", description: "Approaches that help front desk and clinical teams stay aligned through busy periods." },
        { title: "Patient experience", description: "Small improvements in communication and context that make a noticeable difference." },
        { title: "Growth", description: "Ways to turn operational visibility into smarter decisions for your hospital." },
    ]),
    "/documentation": page("Documentation", "Everything you need to get started", "Find clear guidance for setting up IndHMS, configuring your hospital, and helping your team build confidence.", [
        { title: "Setup guides", description: "Configure hospital details, departments, doctors, users, and the workflows your team uses every day." },
        { title: "Team guides", description: "Give each department a practical path to the features that matter to their role." },
        { title: "Reference", description: "Look up platform behavior, terminology, and integration details whenever you need them." },
    ]),
    "/support": page("Support", "Help when your team needs it", "Get thoughtful, practical support from people who understand that hospital operations cannot wait around.", [
        { title: "Fast answers", description: "Reach the right support context without having to explain your entire operation from scratch." },
        { title: "Guided troubleshooting", description: "Work through issues with clear steps and a team that stays with the problem." },
        { title: "Implementation support", description: "Get help turning your hospital's processes into a reliable IndHMS workflow." },
    ], "Contact support"),
    "/faqs": page("FAQs", "Answers for your next step", "Find quick answers about the platform, onboarding, support, and how IndHMS fits into a hospital's existing operation.", [
        { title: "Is IndHMS right for my hospital?", description: "IndHMS is designed for hospitals, clinics, diagnostic centers, and growing hospital groups that want one connected operation." },
        { title: "How does onboarding work?", description: "We help configure your hospital and guide your team through the workflows they will use most." },
        { title: "Can I talk to someone?", description: "Yes. Contact our team for a walkthrough focused on your hospital and your current challenges." },
    ]),
    "/community": page("Community", "Learn with other hospital teams", "Share ideas, ask practical questions, and discover how other hospitals are improving the daily work behind great patient care.", [
        { title: "Exchange ideas", description: "Learn from the patterns and solutions other hospital teams have tested in the real world." },
        { title: "Stay current", description: "Keep up with product improvements and the operational topics shaping modern healthcare." },
        { title: "Bring your questions", description: "A useful community starts with honest questions about what is difficult today." },
    ]),
    "/privacy-policy": page("Legal", "Privacy Policy", "We respect your information and explain clearly how it is collected, used, and protected.", [
        { title: "Information we collect", description: "We collect only the information needed to provide, improve, and support our services." },
        { title: "How we use it", description: "Your information helps us respond to requests, operate the platform, and communicate relevant updates." },
        { title: "Your choices", description: "You can contact us with questions about your information or the choices available to you." },
    ]),
    "/terms-of-service": page("Legal", "Terms of Service", "These terms describe the responsibilities and expectations that apply when using IndHMS.", [
        { title: "Using the service", description: "Use the platform lawfully and keep account information accurate and secure." },
        { title: "Your content", description: "You retain responsibility for the data and content your hospital puts into the platform." },
        { title: "Our commitment", description: "We work to keep the service reliable, secure, and useful for hospital teams." },
    ]),
    "/cookie-policy": page("Legal", "Cookie Policy", "Learn how cookies and similar technologies help us keep the site useful and reliable.", [
        { title: "Essential cookies", description: "Some cookies are needed for core site behavior and cannot be switched off." },
        { title: "Preferences", description: "Preference cookies help remember choices and make future visits more convenient." },
        { title: "Your control", description: "You can manage cookies through your browser settings and contact us with questions." },
    ]),
};
