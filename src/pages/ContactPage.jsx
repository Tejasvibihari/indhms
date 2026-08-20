import React from "react";
import ContactSection from "../components/ContactSection";
import SitePage from "./SitePage";
import { PAGE_CONTENT } from "./pageContent";

export default function ContactPage() {
    return <SitePage {...PAGE_CONTENT["/contact"]} showSections={false}><ContactSection /></SitePage>;
}
