"use client";

import dynamic from "next/dynamic";

const SiteInteractions = dynamic(() => import("./SiteInteractions"), {
  ssr: false,
});

export default function LazySiteInteractions() {
  return <SiteInteractions />;
}
