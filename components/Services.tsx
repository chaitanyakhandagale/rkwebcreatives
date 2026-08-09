"use client";

import { motion } from "framer-motion";
import { Layout, Code2, Megaphone, Server, ArrowRight } from "lucide-react";

const services = [
  {
    tag: "01",
    icon: Layout,
    title: "WordPress Website Design",
    body: "Custom-built themes, not a page-builder afterthought. Fast, accessible, and editable enough that your team doesn't have to call me for every text change.",
  },
  {
    tag: "02",
    icon: Code2,
    title: "React, Node & Next.js Development",
    body: "Full-stack builds for products that outgrow WordPress — dashboards, booking systems, member portals, storefronts, anything with real logic behind it.",
  },
  {
    tag: "03",
    icon: Megaphone,
    title: "Digital Marketing",
    body: "SEO structure, Google Business setup, and conversion-ready landing pages, so the site you paid for is actually the one people find.",
  },
  {
    tag: "04",
    icon: Server,
    title: "Static Website Hosting",
    body: "Deployed on fast, static infrastructure — free SSL, global CDN, near-zero downtime, and no server for you to babysit.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-bg py-28 overflow-hidden">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-primary/6 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              What I Build
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Four crafts,
              <br />
              <span className="text-brand-primary">one contractor.</span>
            </h2>
          </div>
          <a
            href="/services"
            className="group inline-flex items-center gap-2 rounded-sm border border-brand-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary self-start md:self-auto shrink-0"
          >
            All Services
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-brand-border bg-brand-surface p-8 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_-16px_rgba(34,197,94,0.18)]"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-brand-primary/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Top row */}
              <div className="relative flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-primary/10 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-brand-surface">
                  <service.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[11px] text-brand-border group-hover:text-brand-primary/40 transition-colors">
                  {service.tag}
                </span>
              </div>

              {/* Divider */}
              <div className="relative h-px w-8 bg-brand-border mb-5 transition-all duration-300 group-hover:w-12 group-hover:bg-brand-primary" />

              <h3 className="relative font-display text-lg font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative font-body text-sm leading-relaxed text-brand-muted">
                {service.body}
              </p>

              {/* Bottom arrow */}
              <div className="relative mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-brand-primary/0 group-hover:text-brand-primary transition-all duration-300">
                Learn more
                <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
