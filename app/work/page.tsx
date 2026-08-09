"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "WordPress",
    tag: "01",
    title: "Boutique Retail Storefront",
    result: "Custom WooCommerce theme with 38% faster load time and a CMS the client manages solo.",
    stack: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS"],
    preview: [70, 100, 45, 45, 45],
  },
  {
    category: "Next.js",
    tag: "02",
    title: "Fitness Studio Booking App",
    result: "Class scheduling + Stripe payments, built on Next.js and Node.js with a clean admin dashboard.",
    stack: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    preview: [50, 50, 100, 60, 40],
  },
  {
    category: "SEO",
    tag: "03",
    title: "Local Roastery Relaunch",
    result: "Static rebuild + local SEO strategy — 2.4× organic traffic in 90 days post-launch.",
    stack: ["Next.js", "Vercel", "Google Analytics", "SEO"],
    preview: [100, 30, 65, 65, 65],
  },
  {
    category: "React",
    tag: "04",
    title: "Legal Practice Client Portal",
    result: "Secure document intake portal with role-based access and e-signature integration.",
    stack: ["React", "Node.js", "MySQL", "REST API"],
    preview: [40, 60, 100, 100, 40],
  },
  {
    category: "WordPress",
    tag: "05",
    title: "Healthcare Clinic Website",
    result: "HIPAA-aware contact forms, appointment booking, and a fully editable Gutenberg layout.",
    stack: ["WordPress", "PHP", "MySQL", "Figma"],
    preview: [60, 80, 60, 40, 90],
  },
  {
    category: "Next.js",
    tag: "06",
    title: "SaaS Marketing Site",
    result: "High-performance marketing site with animated sections, blog, and conversion-optimised CTAs.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    preview: [80, 50, 70, 100, 55],
  },
];

const filters = ["All", "WordPress", "Next.js", "React", "SEO"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="bg-brand-bg text-brand-ink">

      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-24"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 25%, #0f2d6b 50%, #1B4B7A 72%, #1e6fa8 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Selected Work
            </span>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
                  A few things
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">I&apos;ve shipped.</span>
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                  Representative projects from recent client work — spanning
                  WordPress, React, Next.js, and SEO. Full case studies
                  available on request.
                </p>

                {/* Stats */}
                <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
                  {[
                    ["40+", "Projects shipped"],
                    ["5+", "Years building"],
                    ["98%", "Client satisfaction"],
                  ].map(([stat, label]) => (
                    <div key={label}>
                      <div className="font-display text-2xl font-bold text-white">{stat}</div>
                      <div className="mt-1 text-xs text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 font-mono text-xs tracking-wider text-slate-400">
                  <span>Home</span><span>/</span>
                  <span className="text-blue-300">Work</span>
                </div>
              </div>

              {/* Right — project count panel */}
              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    <span className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 font-mono text-[10px] text-slate-300">
                      rkwebcreatives.com/work
                    </span>
                  </div>
                  <div className="divide-y divide-white/10" style={{ backgroundColor: "rgba(15,30,80,0.4)" }}>
                    {["WordPress", "Next.js", "React", "SEO"].map((cat) => (
                      <div key={cat} className="flex items-center justify-between px-5 py-3.5">
                        <span className="font-mono text-[11px] text-white">{cat}</span>
                        <span className="font-mono text-[10px] text-blue-300">
                          {projects.filter((p) => p.category === cat).length} projects
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  <span>Fig. 04 — Project breakdown</span>
                  <span>{projects.length} total</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">

          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                  active === f
                    ? "border-brand-primary bg-brand-primary text-brand-surface"
                    : "border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-brand-muted">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="corner-marks group overflow-hidden rounded-sm border border-brand-border bg-brand-surface transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_-16px_rgba(27,75,122,0.18)]"
                >
                  {/* Preview bars */}
                  <div className="flex h-40 items-end gap-1.5 bg-brand-grid-fine bg-grid-fine p-5">
                    {project.preview.map((h, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1 + idx * 0.06 }}
                        className="w-full rounded-t-sm border border-brand-primary/40 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors duration-300"
                      />
                    ))}
                  </div>

                  {/* Card body */}
                  <div className="border-t border-brand-border p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-brand-muted">{project.tag}</span>
                        <ArrowUpRight
                          size={15}
                          className="text-brand-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary"
                        />
                      </div>
                    </div>

                    <h3 className="font-display text-base font-semibold text-brand-ink group-hover:text-brand-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-brand-muted">
                      {project.result}
                    </p>

                    {/* Stack tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-sm border border-brand-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-brand-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-brand-border bg-brand-surfaceAlt py-24">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Start a Project
            </span>
            <h2 className="mt-4 max-w-md font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Want your project on this list?
            </h2>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-brand-muted">
              Full case studies available on request — reach out and let&apos;s
              talk about what you&apos;re building.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-brand-primary px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-brand-surface transition-colors hover:bg-brand-primaryDark"
          >
            Start a Conversation
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

    </div>
  );
}
