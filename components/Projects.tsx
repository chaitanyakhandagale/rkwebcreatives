"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Swap these entries for real case studies — title, category, short result,
 * and a live/screenshot link. The bars in `preview` are a stylized layout
 * sketch (not a real screenshot) so the section works before you add photos.
 */
const projects = [
  {
    category: "WordPress",
    title: "Boutique Retail Storefront",
    result: "Custom WooCommerce theme, 38% faster load time.",
    preview: [70, 100, 45, 45, 45],
  },
  {
    category: "Next.js",
    title: "Fitness Studio Booking App",
    result: "Class scheduling + payments, built on Next.js and Node.",
    preview: [50, 50, 100, 60, 40],
  },
  {
    category: "Static + SEO",
    title: "Local Roastery Relaunch",
    result: "Static rebuild + local SEO, 2.4x organic traffic in 90 days.",
    preview: [100, 30, 65, 65, 65],
  },
  {
    category: "React",
    title: "Legal Practice Client Portal",
    result: "Secure document intake portal with role-based access.",
    preview: [40, 60, 100, 100, 40],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-brand-bg py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              Selected work
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              A few things I&apos;ve shipped.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-brand-muted">
            Representative project types from recent client work — full
            case studies available on request.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              href="#contact"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="corner-marks group block overflow-hidden rounded-sm border border-brand-border bg-brand-surfaceAlt"
            >
              <div className="flex h-44 items-end gap-2 bg-brand-grid-fine bg-grid-fine p-6">
                {project.preview.map((h, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.15 + idx * 0.06 }}
                    className="w-full rounded-t-sm border border-brand-primary/50 bg-brand-primary/10"
                  />
                ))}
              </div>

              <div className="border-t border-brand-border p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-brand-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-primary"
                  />
                </div>
                <h3 className="mt-3 font-display text-lg text-brand-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {project.result}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
