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
    <span className="font-mono text-[11px] text-brand-primary sm:text-xs">
      {text}
      <span className="ml-0.5 inline-block h-3 w-[6px] translate-y-[1px] animate-blink bg-brand-primary align-middle" />
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
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-bg pt-28"
    >
      {/* Ambient technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            Freelance web studio
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
            From blueprint
            <br />
            to <span className="text-brand-primary">browser.</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-brand-muted">
            RK Web Creatives designs and builds WordPress sites, custom
            React / Node / Next.js applications, and the marketing that
            fills them with visitors — one freelancer, start to finish, no
            middlemen.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-surface transition-transform hover:-translate-y-0.5 hover:bg-brand-primaryDark"
            >
              Start a project
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <Play size={13} />
              See the work
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-brand-border pt-6">
            {[
              ["40+", "Projects shipped"],
              ["5+", "Years building"],
              ["<24h", "Avg. response"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-xl text-brand-ink">
                  {stat}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Signature visual: a plan that draws itself into a live browser window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="corner-marks overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-[0_20px_60px_-25px_rgba(16,27,45,0.25)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surfaceAlt px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-muted/40" />
              <span className="ml-3 flex-1 truncate rounded-sm bg-brand-bg/60 px-3 py-1 font-mono text-[10px] text-brand-muted">
                rkwebcreatives.com
              </span>
            </div>

            {/* Drawing surface */}
            <div className="relative h-64 bg-brand-grid-fine bg-grid-fine p-4">
              <svg viewBox="0 0 280 150" className="h-full w-full">
                {wireframeBoxes.map((box, i) => (
                  <motion.rect
                    key={i}
                    x={box.x}
                    y={box.y}
                    width={box.w}
                    height={box.h}
                    rx={3}
                    fill="rgba(27,75,122,0.05)"
                    stroke="#1B4B7A"
                    strokeWidth={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.5 + i * 0.22,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
                className="absolute bottom-3 left-4 right-4 rounded-sm border border-brand-border bg-brand-bg/80 px-3 py-2"
              >
                <TypedCode />
              </motion.div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-brand-muted">
            <span>Fig. 01 — Live build preview</span>
            <span>Scale 1:1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
