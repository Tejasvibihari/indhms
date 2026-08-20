import React from "react";
import BenefitComponent from "../components/BenefitComponent";
import SitePage from "./SitePage";
import { PAGE_CONTENT } from "./pageContent";

export default function BenefitsPage() {
    return <SitePage {...PAGE_CONTENT["/benefits"]} showSections={false}><BenefitComponent /></SitePage>;
}
