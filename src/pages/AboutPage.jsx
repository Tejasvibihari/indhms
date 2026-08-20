import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function AboutPage() {
    return <StandardPage content={PAGE_CONTENT["/about"]} />;
}
