import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function DocumentationPage() {
    return <StandardPage content={PAGE_CONTENT["/documentation"]} />;
}
