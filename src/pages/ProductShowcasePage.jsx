import React from "react";
import FeaturesComponent from "../components/FeaturesComponent";
import SitePage from "./SitePage";
import { PAGE_CONTENT } from "./pageContent";

export default function ProductShowcasePage() {
    return <SitePage {...PAGE_CONTENT["/product-showcase"]} showSections={false}><FeaturesComponent /></SitePage>;
}
