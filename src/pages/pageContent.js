const page = (eyebrow, title, description, sections, cta) => ({
    eyebrow,
    title,
    description,
    sections,
    cta,
});

export const PAGE_CONTENT = {
    "/features": page("The platform", "Everything your property needs in one place", "IndHMS connects reservations, rooms, guests, billing, and teams in one calm operational workspace.", [
        { title: "Reservations", description: "Keep direct bookings and room availability accurate with a live reservation workspace.", items: ["Unified booking calendar", "Automated confirmations", "Real-time room status"] },
        { title: "Front desk", description: "Give your team the context they need to make every arrival and departure feel effortless.", items: ["Fast check-in and check-out", "Guest profiles and notes", "Flexible rate management"] },
        { title: "Operations", description: "Turn daily hotel operations into a clear, measurable rhythm for every department.", items: ["Housekeeping coordination", "Invoices and payments", "Reports that explain performance"] },
    ]),
    "/benefits": page("Why IndHMS", "Run a smoother, more profitable hotel", "Replace disconnected tools and manual follow-ups with a single source of truth for your property.", [
        { title: "Less busywork", description: "Automate repetitive updates so your staff can focus on guests instead of spreadsheets." },
        { title: "Fewer missed opportunities", description: "See availability, revenue, and guest demand clearly enough to act at the right moment." },
        { title: "A better guest experience", description: "Keep every team member aligned from the first reservation request to checkout." },
    ]),
    "/pricing": page("Simple pricing", "Choose a plan that grows with your property", "Start with the tools you need today and add capability as your rooms, team, and operation expand.", [
        { title: "Essentials", description: "For independent properties getting their core workflow under control.", items: ["Reservations and room calendar", "Guest profiles", "Basic reports"] },
        { title: "Professional", description: "For growing hotels that need connected departments and deeper visibility.", items: ["Everything in Essentials", "Housekeeping workflows", "Advanced revenue reports"] },
        { title: "Enterprise", description: "For groups that need tailored rollout, permissions, and support.", items: ["Multi-property operations", "Custom integrations", "Dedicated onboarding"] },
    ], "Request pricing"),
    "/resources": page("Resources", "Practical guidance for modern hotel teams", "Explore product guidance, operational ideas, and answers that help your team get more from IndHMS.", [
        { title: "Learn the workflow", description: "See how the platform supports the complete guest journey, from booking through departure." },
        { title: "Plan your rollout", description: "Use our implementation guidance to move your team from disconnected tools to one shared operation." },
        { title: "Get expert help", description: "Our support team is ready to answer questions and help you build a workflow around your property." },
    ]),
    "/contact": page("Talk to our team", "See IndHMS in your hotel", "Tell us about your property and we will show you the workflows that can make the biggest difference first.", [
        { title: "A tailored walkthrough", description: "We will focus the conversation on your rooms, departments, booking mix, and current tools." },
        { title: "A clear implementation path", description: "Understand what onboarding looks like, what your team will need, and how quickly you can get started." },
        { title: "Real answers", description: "Bring your operational questions. We will help you evaluate fit without a high-pressure sales process." },
    ], "Start a conversation"),
    "/product-showcase": page("Product showcase", "A live view of your hotel operation", "From the front desk to the back office, IndHMS gives your team a shared view of what is happening now.", [
        { title: "Front desk dashboard", description: "See today's arrivals, departures, room readiness, and outstanding guest requests at a glance." },
        { title: "Housekeeping board", description: "Coordinate clean, inspected, and maintenance rooms without calling across departments." },
        { title: "Business overview", description: "Track occupancy, revenue, booking sources, and trends from one decision-ready view." },
    ]),
    "/how-it-works": page("How it works", "One connected flow from booking to checkout", "IndHMS keeps every handoff visible so your team can spend less time updating systems and more time looking after guests.", [
        { title: "1. Capture the booking", description: "Reservations land in one calendar with the dates, rate, guest, and room details your team needs." },
        { title: "2. Coordinate the stay", description: "Front desk, housekeeping, and management work from the same live room and guest information." },
        { title: "3. Learn and improve", description: "Use clear reports to understand demand, revenue, and the moments that shape guest satisfaction." },
    ]),
    "/testimonials": page("Customer stories", "Built around the people who run hotels", "Hear how property teams use IndHMS to bring more clarity to busy days and more consistency to every stay.", [
        { title: "Independent hotels", description: "Keep the operation professional and coordinated without the overhead of a sprawling toolset." },
        { title: "Growing properties", description: "Create repeatable processes that help new team members become effective quickly." },
        { title: "Multi-property teams", description: "Standardize reporting and visibility while keeping each property flexible where it matters." },
    ]),
    "/integrations": page("Integrations", "Connect the tools your hotel already uses", "IndHMS is designed to fit into your operation, helping information move cleanly between the systems your team relies on.", [
        { title: "Booking channels", description: "Keep room availability and reservation information aligned across your direct and third-party channels." },
        { title: "Payments and accounting", description: "Make billing easier to reconcile with connected payment and financial workflows." },
        { title: "Your future stack", description: "Talk to us about the integrations and data flows that are most important to your property." },
    ]),
    "/about": page("About IndHMS", "Technology that respects hotel work", "We are building practical software for the teams who make hospitality feel personal, organized, and effortless.", [
        { title: "Operational first", description: "We start with the real pace and constraints of hotel teams, then design the technology around them." },
        { title: "Clear by default", description: "Good software should reduce uncertainty. Every screen is designed to make the next action easier to see." },
        { title: "Built to improve", description: "We listen closely to property teams and keep refining the product around what helps them most." },
    ]),
    "/careers": page("Careers", "Help shape the future of hotel operations", "Join a team working on thoughtful tools for one of the world's most human industries.", [
        { title: "Meaningful problems", description: "Work on software that supports real people during real, high-stakes operational moments." },
        { title: "Room to contribute", description: "Bring your perspective, challenge assumptions, and take ownership of work that matters." },
        { title: "Hospitality mindset", description: "We value clarity, care, and the habit of making things better for the person who comes next." },
    ], "Contact our team"),
    "/blog": page("Blog", "Ideas for better hotel operations", "Read practical thinking on hospitality technology, guest experience, and the systems behind great stays.", [
        { title: "Operations", description: "Approaches that help front desk and housekeeping teams stay aligned through busy periods." },
        { title: "Guest experience", description: "Small improvements in communication and context that make a noticeable difference." },
        { title: "Growth", description: "Ways to turn operational visibility into smarter decisions for your property." },
    ]),
    "/documentation": page("Documentation", "Everything you need to get started", "Find clear guidance for setting up IndHMS, configuring your property, and helping your team build confidence.", [
        { title: "Setup guides", description: "Configure property details, room types, rates, users, and the workflows your team uses every day." },
        { title: "Team guides", description: "Give each department a practical path to the features that matter to their role." },
        { title: "Reference", description: "Look up platform behavior, terminology, and integration details whenever you need them." },
    ]),
    "/support": page("Support", "Help when your team needs it", "Get thoughtful, practical support from people who understand that hotel operations cannot wait around.", [
        { title: "Fast answers", description: "Reach the right support context without having to explain your entire operation from scratch." },
        { title: "Guided troubleshooting", description: "Work through issues with clear steps and a team that stays with the problem." },
        { title: "Implementation support", description: "Get help turning your property's processes into a reliable IndHMS workflow." },
    ], "Contact support"),
    "/faqs": page("FAQs", "Answers for your next step", "Find quick answers about the platform, onboarding, support, and how IndHMS fits into a hotel's existing operation.", [
        { title: "Is IndHMS right for my property?", description: "IndHMS is designed for hotels, resorts, guesthouses, and growing property groups that want one connected operation." },
        { title: "How does onboarding work?", description: "We help configure your property and guide your team through the workflows they will use most." },
        { title: "Can I talk to someone?", description: "Yes. Contact our team for a walkthrough focused on your property and your current challenges." },
    ]),
    "/community": page("Community", "Learn with other hospitality teams", "Share ideas, ask practical questions, and discover how other properties are improving the daily work behind great stays.", [
        { title: "Exchange ideas", description: "Learn from the patterns and solutions other hotel teams have tested in the real world." },
        { title: "Stay current", description: "Keep up with product improvements and the operational topics shaping modern hospitality." },
        { title: "Bring your questions", description: "A useful community starts with honest questions about what is difficult today." },
    ]),
    "/privacy-policy": page("Legal", "Privacy Policy", "We respect your information and explain clearly how it is collected, used, and protected.", [
        { title: "Information we collect", description: "We collect only the information needed to provide, improve, and support our services." },
        { title: "How we use it", description: "Your information helps us respond to requests, operate the platform, and communicate relevant updates." },
        { title: "Your choices", description: "You can contact us with questions about your information or the choices available to you." },
    ]),
    "/terms-of-service": page("Legal", "Terms of Service", "These terms describe the responsibilities and expectations that apply when using IndHMS.", [
        { title: "Using the service", description: "Use the platform lawfully and keep account information accurate and secure." },
        { title: "Your content", description: "You retain responsibility for the data and content your property puts into the platform." },
        { title: "Our commitment", description: "We work to keep the service reliable, secure, and useful for hotel teams." },
    ]),
    "/cookie-policy": page("Legal", "Cookie Policy", "Learn how cookies and similar technologies help us keep the site useful and reliable.", [
        { title: "Essential cookies", description: "Some cookies are needed for core site behavior and cannot be switched off." },
        { title: "Preferences", description: "Preference cookies help remember choices and make future visits more convenient." },
        { title: "Your control", description: "You can manage cookies through your browser settings and contact us with questions." },
    ]),
};
