// AosInit.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS стилдерин импорттоо

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      // Глобалдык конфигурациялар
      duration: 800,
      easing: "ease-out-back",
      once: true, // Бир жолу гана анимациялоо
    });
  }, []);
  return null;
}