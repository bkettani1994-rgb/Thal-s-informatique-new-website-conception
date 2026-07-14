"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const text = anchor.textContent?.trim() ?? "";
      if (text.includes("Demander une démo")) {
        trackEvent("demo_request_click", { link_url: anchor.href });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
