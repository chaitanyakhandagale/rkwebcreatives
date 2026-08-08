"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Founded", value: "2020" },
  { label: "Based in", value: "India · Remote worldwide" },
  { label: "Clients served", value: "35+ small businesses" },
  { label: "Turnaround", value: "2–6 weeks per build" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-brand-border bg-brand-surfaceAlt py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
            The studio
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
            One name on every invoice.
            <br />
            One person on every call.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-brand-muted">
            RK Web Creatives is a freelance studio, not an agency with a
            revolving door of account managers. Every project — from the
            first sketch to the last deploy — runs through the same hands.
            That means fewer handoffs, faster answers, and a build that
            actually matches what was promised on the call.
          </p>
          <p className="text-base leading-relaxed text-brand-muted">
            The work spans two worlds on purpose: content-driven WordPress
            sites for businesses that need to be found and trusted, and
            custom React / Node / Next.js applications for products that
            have outgrown a page builder. Add the marketing and hosting
            layer, and a client gets a site that ships, ranks, and stays
            online — from a single freelancer.
          </p>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-brand-border bg-brand-border sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-brand-surfaceAlt px-4 py-5">
                <div className="font-display text-sm text-brand-ink">
                  {fact.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
