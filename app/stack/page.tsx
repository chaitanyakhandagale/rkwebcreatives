"use client";

import { motion } from "framer-motion";
import {
  SiWordpress, SiPhp, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiFigma, SiMysql, SiVercel, SiNetlify,
  SiGithub, SiWoocommerce, SiTypescript, SiPostgresql,
} from "react-icons/si";
import { FiGlobe, FiBarChart2 } from "react-icons/fi";

const categories = [
  {
    label: "Frontend",
    color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    tools: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    tools: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    label: "CMS & E-commerce",
    color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    tools: [
      { name: "WordPress", icon: SiWordpress },
      { name: "WooCommerce", icon: SiWoocommerce },
      { name: "REST APIs", icon: FiGlobe },
    ],
  },
  {
    label: "Deploy & Tools",
    color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    tools: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "GitHub", icon: SiGithub },
      { name: "Google Analytics", icon: FiBarChart2 },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Ship fast, stay readable",
    desc: "Every tool in the stack is chosen because it lets me move quickly without leaving a codebase the next developer can't understand.",
  },
  {
    number: "02",
    title: "Right tool, right job",
    desc: "WordPress for content-heavy sites, Next.js for apps with real logic. No trend-chasing — just matching the stack to the problem.",
  },
  {
    number: "03",
    title: "Performance by default",
    desc: "Static where possible, server-rendered where needed. Every project ships with Lighthouse scores that don't embarrass anyone.",
  },
  {
    number: "04",
    title: "Easy to hand over",
    desc: "Clean repos, documented decisions, and a CMS your team can actually use — so you're never locked in to calling me for every change.",
  },
];

export default function StackPage() {
  return (
    <div className="bg-brand-bg text-brand-ink">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-bg pt-28 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-70 mask-[radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              The Stack
            </span>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <h1 className="font-display text-4xl leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
                  Tools I actually
                  <br />
                  <span className="text-brand-primary">ship with.</span>
                </h1>
                <p className="mt-6 max-w-md font-body text-base leading-relaxed text-brand-muted">
                  No trend-chasing — just a stack that&apos;s fast to build,
                  fast to load, and easy for the next developer to pick up
                  after me.
                </p>

                {/* Stats */}
                <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-brand-border pt-6">
                  {[
                    ["14+", "Tools mastered"],
                    ["5+", "Years shipping"],
                    ["40+", "Projects built"],
                  ].map(([stat, label]) => (
                    <div key={label}>
                      <div className="font-display text-xl text-brand-ink">{stat}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand-muted">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Breadcrumb */}
                <div className="mt-8 flex items-center gap-2 font-mono text-xs tracking-wider text-brand-muted">
                  <span>Home</span><span>/</span>
                  <span className="text-brand-primary">Stack</span>
                </div>
              </div>

              {/* Right — marquee preview */}
              <div className="hidden lg:block">
                <div className="corner-marks overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-[0_20px_60px_-25px_rgba(16,27,45,0.2)]">
                  <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surfaceAlt px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-muted/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/80" />
                    <span className="ml-3 flex-1 truncate rounded-sm bg-brand-bg/60 px-3 py-1 font-mono text-[10px] text-brand-muted">
                      package.json
                    </span>
                  </div>
                  <div className="p-5 font-mono text-[11px] leading-6 text-brand-muted">
                    <span className="text-brand-primary">"dependencies"</span>: {"{"}<br />
                    &nbsp;&nbsp;<span className="text-brand-ink">"next"</span>: <span className="text-brand-primary">"^14.0.0"</span>,<br />
                    &nbsp;&nbsp;<span className="text-brand-ink">"react"</span>: <span className="text-brand-primary">"^18.0.0"</span>,<br />
                    &nbsp;&nbsp;<span className="text-brand-ink">"tailwindcss"</span>: <span className="text-brand-primary">"^3.4.0"</span>,<br />
                    &nbsp;&nbsp;<span className="text-brand-ink">"typescript"</span>: <span className="text-brand-primary">"^5.0.0"</span><br />
                    {"}"}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                  <span>Fig. 03 — Core deps</span>
                  <span>Always up to date</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stack Grid ── */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Full Stack
            </span>
            <h2 className="mt-4 font-display text-3xl text-brand-ink sm:text-4xl">
              Every tool, categorised.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="rounded-sm border border-brand-border bg-brand-surface p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-brand-border" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">
                    {cat.label}
                  </span>
                  <span className="h-px flex-1 bg-brand-border" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cat.tools.map((tool, ti) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.1 + ti * 0.05 }}
                      className="group flex items-center gap-3 rounded-sm border border-brand-border bg-brand-surfaceAlt px-4 py-3 transition-all duration-200 hover:border-brand-primary/40 hover:bg-brand-primary/5"
                    >
                      <tool.icon
                        size={16}
                        className="shrink-0 text-brand-muted transition-colors group-hover:text-brand-primary"
                      />
                      <span className="font-mono text-xs text-brand-ink">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-t border-brand-border bg-brand-surfaceAlt py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Philosophy
            </span>
            <h2 className="mt-4 font-display text-3xl text-brand-ink sm:text-4xl">
              How I choose what to use.
            </h2>
          </div>

          <div className="grid gap-px bg-brand-border border border-brand-border rounded-sm overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-surface p-7 hover:bg-brand-surfaceAlt transition-colors duration-200"
              >
                <span className="font-display text-3xl font-semibold text-brand-primary">
                  {p.number}
                </span>
                <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-muted">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-brand-border py-24">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Start a Project
            </span>
            <h2 className="mt-4 max-w-md font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Want this stack working for your project?
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-brand-primary px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-brand-surface transition-colors hover:bg-brand-primaryDark"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
