"use client";

import { BsInstagram } from "react-icons/bs";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";


const columns = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Stack", href: "#technology" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Plans", href: "#plans" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t  border-brand-border bg-brand-bg">
      <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-5 ">


        <div className="grid grid-cols-2 gap-10 pt-16 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded border border-brand-primary/60 font-mono text-sm text-brand-primary">
                RK
              </span>
              <span className="font-display text-sm text-brand-ink">
                RK Web Creatives
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
              A freelance studio building WordPress sites, React / Node /
              Next.js applications, digital marketing, and static hosting —
              one contractor, start to finish.
            </p>
            <div className="mt-6 flex items-center gap-4 text-brand-muted">
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-brand-primary">
                <GiThunderBlade size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-brand-primary">
                <LiaLinkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-brand-primary">
                <BsInstagram size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
                <div className=" border-t border-brand-border">

        <div className=" mx-auto max-w-6xl p-4 flex flex-col items-start justify-between gap-4  pt-8 font-mono text-[10px] uppercase tracking-widest text-brand-muted sm:flex-row sm:items-center">

          <span>© {new Date().getFullYear()} RK Web Creatives. All rights reserved.</span>
          <span>Built with Next.js · Tailwind CSS · Framer Motion</span>
          </div>
        </div>
    </footer>
  );
}
