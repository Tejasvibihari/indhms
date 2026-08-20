import React from "react";
import FAQSection from "../components/FaqSection";
import SitePage from "./SitePage";
import { PAGE_CONTENT } from "./pageContent";

export default function FaqPage() {
    return <SitePage {...PAGE_CONTENT["/faqs"]} showSections={false}><FAQSection /></SitePage>;
}
