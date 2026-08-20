import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function SupportPage() {
    return <StandardPage content={PAGE_CONTENT["/support"]} />;
}
