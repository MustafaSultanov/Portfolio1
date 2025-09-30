"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";
import gsap from "gsap";
import { motion } from "framer-motion";

const ServiceSliderVIP = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  // Parallax cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current.children, {
          x: (i: number) => x * 40 * (i % 2 === 0 ? 1 : -1),
          y: (i: number) => y * 40 * (i % 2 === 0 ? 1 : -1),
          rotationY: x * 20,
          rotationX: y * 20,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles effect
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.3)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0d1117] text-gray-200 overflow-hidden">
      <canvas ref={particlesRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* HERO INTRO */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            VIP Skills & Expertise
          </span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
          Building interactive, neon-lit, rich front-end experiences with attention to every detail.
        </p>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="flex flex-wrap justify-center gap-12 md:gap-24 py-10 border-y border-gray-800 z-10 relative">
        {[
          { num: "5+", label: "Years Experience" },
          { num: "50+", label: "Projects Delivered" },
          { num: "10+", label: "Technologies Mastered" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-semibold text-white">{stat.num}</h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* SKILLS SLIDER */}
      <section className="relative py-20 px-6 md:px-20 z-10" ref={parallaxRef}>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
          Core Skills
        </h2>

        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 32 },
          }}
          freeMode
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="pb-12"
        >
          {ServiceData.map((item, idx) => (
            <SwiperSlide key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[300px] w-[250px] mx-auto rounded-2xl
                  border border-gray-700 bg-[#161b22] hover:bg-[#1c2128]
                  shadow-[0_0_30px_rgba(0,255,255,0.3)]
                  hover:shadow-[0_0_60px_rgba(0,255,255,0.6)]
                  overflow-hidden transform hover:-translate-y-3 hover:scale-105
                  transition-all duration-500"
              >
                {/* background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10
                  group-hover:opacity-25 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />

                {/* content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-5 text-center px-4">
                  <item.icon className="w-16 h-16 text-gray-300 group-hover:text-cyan-400 transition-colors duration-500" />
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                </div>

                {/* Neon glow border */}
                <div className="absolute -inset-1 rounded-2xl blur-lg bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default ServiceSliderVIP;
