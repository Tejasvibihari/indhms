import React from "react";
import StandardPage from "./StandardPage";
import { PAGE_CONTENT } from "./pageContent";

export default function BlogPage() {
    return <StandardPage content={PAGE_CONTENT["/blog"]} />;
}
