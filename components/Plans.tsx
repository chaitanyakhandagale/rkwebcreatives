"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER SITE",
    tag: "WordPress / Custom",
    price: "₹17,000",
    unit: "starting price",
    highlight: false,
    features: [
      "Up to 5 pages",
      "Custom WordPress or custom-coded website",
      "Mobile-responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "1-week delivery",
    ],
  },
  {
    name: "GROWTH BUILD",
    tag: "Custom Web App",
    price: "₹25,000",
    unit: "starting price",
    highlight: true,
    features: [
      "Custom-designed website (up to 10 pages)",
      "Custom WordPress or custom-coded website",
      "On-page SEO optimization",
      "Google Analytics integration",
      "Google Search Console setup",
      "Basic copywriting support",
      "1–2 week delivery",
    ],
  },
  {
    name: "ALL-IN-ONE GROWTH PACKAGE",
    tag: "Web + Ads & Growth",
    price: "₹50,000",
    unit: "full package",
    highlight: false,
    features: [
      "Full custom website design & development",
      "Complete on-page + technical SEO setup",
      "Instagram ad campaign setup (creatives + targeting)",
      "1-month ad management included",
      "Monthly performance reporting",
      "Priority support & 1 revision round post-launch",
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative border-t border-brand-border bg-brand-surfaceAlt py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
            Engagement
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
            Pick a lane, or blend them.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Every project is scoped and quoted after a short call - these
            are starting points, not fixed menus.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-sm border p-8 ${
                plan.highlight
                  ? "border-brand-primary bg-brand-surface"
                  : "border-brand-border bg-brand-surface"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 rounded-sm bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-bg">
                  Most requested
                </span>
              )}

              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                {plan.tag}
              </span>
              <h3 className="mt-3 font-display text-xl text-brand-ink">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl text-brand-ink">
                  {plan.price}
                </span>
                <span className="font-mono text-xs text-brand-muted">
                  / {plan.unit}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-brand-muted"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-brand-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-sm border py-3 text-center font-mono text-xs uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? "border-brand-primary bg-brand-primary text-brand-bg hover:bg-transparent hover:text-brand-primary"
                    : "border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                Get a quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
