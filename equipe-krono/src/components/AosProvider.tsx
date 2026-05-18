"use client";

import { useEffect } from "react";

export default function AosProvider() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
      });
    });
  }, []);

  return null;
}
