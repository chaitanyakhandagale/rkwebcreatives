"use client";

import { motion } from "framer-motion";

const stack = [
  "WordPress",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "MySQL",
  "REST APIs",
  "Vercel",
  "Netlify",
  "Google Analytics",
  "GitHub",
  "WooCommerce",
];

export default function Technology() {
  const row = [...stack, ...stack];

  return (
    <section
      id="technology"
      className="relative border-y border-brand-border bg-brand-surface py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
            The stack
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
            Tools I actually ship with.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            No trend-chasing — just a stack that's fast to build, fast to
            load, and easy for the next developer to pick up after me.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-surface to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-sm border border-brand-border bg-brand-surfaceAlt px-6 py-3 font-mono text-sm text-brand-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
