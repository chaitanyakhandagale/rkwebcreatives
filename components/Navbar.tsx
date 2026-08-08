"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Stack", href: "/stack" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-sm"
          : "bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-brand-primary/60 font-mono text-sm text-brand-primary">
            RK
          </span>
          <span className="font-display text-sm tracking-wide text-brand-ink">
            RK Web Creatives
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-brand-muted transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm border border-brand-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-brand-primary transition-colors hover:bg-brand-primary hover:text-brand-bg"
          >
            Start a project
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-brand-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-brand-border bg-brand-bg md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-brand-muted hover:text-brand-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-fit rounded-sm border border-brand-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-brand-primary"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
