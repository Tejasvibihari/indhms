import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function CommunityPage() {
    return <StandardPage content={PAGE_CONTENT["/community"]} />;
}
