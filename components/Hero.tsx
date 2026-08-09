"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const CODE_LINE = "<RKWebCreatives client={you} ship={true} />";

function TypedCode() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(CODE_LINE.slice(0, i));
      if (i >= CODE_LINE.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-[11px] text-blue-300 sm:text-xs">
      {text}
      <span className="ml-0.5 inline-block h-3 w-[6px] translate-y-[1px] animate-blink bg-blue-300 align-middle" />
    </span>
  );
}

const wireframeBoxes = [
  { x: 18, y: 20, w: 108, h: 10 },
  { x: 18, y: 40, w: 160, h: 44 },
  { x: 188, y: 40, w: 74, h: 44 },
  { x: 18, y: 96, w: 76, h: 30 },
  { x: 102, y: 96, w: 76, h: 30 },
  { x: 186, y: 96, w: 76, h: 30 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 25%, #0f2d6b 50%, #1B4B7A 72%, #1e6fa8 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Radial glow — top right */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      {/* Radial glow — bottom left */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[100px]" />
      {/* Center accent glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[80px]" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr]">

        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Freelance Web Studio
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            From blueprint
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
              browser.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            RK Web Creatives designs and builds WordPress sites, custom
            React / Node / Next.js applications, and the marketing that
            fills them with visitors — one freelancer, start to finish, no
            middlemen.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-400 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/8 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/35"
            >
              <Play size={13} />
              See the Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["40+", "Projects shipped"],
              ["5+", "Years building"],
              ["<24h", "Avg. response"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-white">{stat}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Browser card visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 font-mono text-[10px] text-slate-300">
                rkwebcreatives.com
              </span>
            </div>

            {/* Drawing surface */}
            <div
              className="relative h-64 p-4"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(99,179,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.08) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
                backgroundColor: "rgba(15,30,80,0.4)",
              }}
            >
              <svg viewBox="0 0 280 150" className="h-full w-full">
                {wireframeBoxes.map((box, i) => (
                  <motion.rect
                    key={i}
                    x={box.x} y={box.y} width={box.w} height={box.h} rx={3}
                    fill="rgba(96,165,250,0.08)"
                    stroke="#60a5fa"
                    strokeWidth={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.5 + i * 0.22, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
                className="absolute bottom-3 left-4 right-4 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur-sm"
              >
                <TypedCode />
              </motion.div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-slate-500">
            <span>Fig. 01 — Live build preview</span>
            <span>Scale 1:1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
