import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function PrivacyPolicyPage() {
    return <StandardPage content={PAGE_CONTENT["/privacy-policy"]} />;
}
