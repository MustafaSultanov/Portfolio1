"use client";
import { useState, useEffect } from "react";

const skills = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js"];

export default function TechRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[28px] w-[120px] overflow-hidden">
      {skills.map((skill, i) => (
        <span
          key={i}
          className={`absolute left-0 top-0 text-xl text-black dark:text-zinc-300 font-light transition-all duration-700 ease-in-out
            ${i === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
