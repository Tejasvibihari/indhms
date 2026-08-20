import React from "react";
import FeaturesComponent from "../components/FeaturesComponent";
import SitePage from "./SitePage";
import { PAGE_CONTENT } from "./pageContent";

export default function FeaturesPage() {
    return <SitePage {...PAGE_CONTENT["/features"]} showSections={false}><FeaturesComponent /></SitePage>;
}
