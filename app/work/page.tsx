"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Variant =
  | "hospital"
  | "accounting"
  | "architecture"
  | "calculator"
  | "company"
  | "wordpress";

const projects: {
  category: string;
  tag: string;
  title: string;
  result: string;
  stack: string[];
  variant: Variant;
  href: string | null;
}[] = [
  {
    category: "React",
    tag: "01",
    title: "Hospital Management System",
    result:
      "Full-stack software for managing patients, beds, and appointments, built with React and Node.js.",
    stack: ["React", "Node.js", "Healthcare"],
    variant: "hospital",
    href: null,
  },
  {
    category: "React",
    tag: "02",
    title: "Fintech Accounting Software",
    result:
      "Accounting platform for ledgers, invoices, and financial reporting, built with React and Node.js.",
    stack: ["React", "Node.js", "Accounting"],
    variant: "accounting",
    href: null,
  },
  {
    category: "Website",
    tag: "03",
    title: "Peregrine",
    result:
      "Portfolio website for an architecture practice, designed and developed end to end.",
    stack: ["Website", "Architecture", "Portfolio"],
    variant: "architecture",
    href: "https://pereegrine.com/",
  },
  {
    category: "Website",
    tag: "04",
    title: "ILoveCalculators",
    result:
      "Multi-page calculator website with a dedicated page for each tool.",
    stack: ["Multi-page", "Calculators", "Website"],
    variant: "calculator",
    href: "https://ilovecalculators.com/",
  },
  {
    category: "Website",
    tag: "05",
    title: "IBGI Solutions",
    result:
      "Corporate website presenting the company, its services, and contact details.",
    stack: ["Company site", "Corporate", "Website"],
    variant: "company",
    href: "https://www.ibgisolutions.com/",
  },
  {
    category: "WordPress",
    tag: "06",
    title: "Boutique Retail Storefront",
    result:
      "Custom WooCommerce theme with 38% faster load time and a CMS the client manages solo.",
    stack: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS"],
    variant: "wordpress",
    href: null,
  },
];

const filters = ["All", "React", "Website", "WordPress"];

/* ---------- shared bits ---------- */

const box = "rounded-sm border border-brand-primary/40 bg-brand-primary/10";
const line = "rounded-full bg-brand-primary/40";
const inView = { once: true, amount: 0.5 } as const;

function Block({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-sm border border-brand-primary/40">
      <div className="flex items-center gap-1 border-b border-brand-primary/40 bg-brand-primary/10 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/50" />
        <span className={`${line} ml-2 h-1.5 w-1/3`} />
      </div>
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}

/* ---------- 1. Hospital ---------- */

function HospitalPreview() {
  const beds = [1, 1, 0, 1, 0, 1, 1, 0];

  return (
    <div className="grid h-full grid-cols-5 gap-2">
      <div className="col-span-2 flex flex-col gap-2">
        <div className={`${box} flex flex-1 items-center justify-center`}>
          <motion.svg
            viewBox="0 0 24 24"
            className="h-9 w-9 text-brand-primary"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.path
              d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"
              fill="currentColor"
              fillOpacity={0.25}
              stroke="currentColor"
              strokeWidth={1.2}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "12px 12px" }}
            />
          </motion.svg>
        </div>
        <div className={`${box} h-9 overflow-hidden`}>
          <svg
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
            className="h-full w-full text-brand-primary"
          >
            <motion.path
              d="M0 15 H22 L27 15 L31 4 L37 26 L42 15 H62 L67 15 L71 4 L77 26 L82 15 H100"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={inView}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-2">
        <div className="grid flex-1 grid-cols-4 gap-1.5">
          {beds.map((occupied, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={inView}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
              className={`relative rounded-sm border ${
                occupied
                  ? "border-brand-primary bg-brand-primary/30"
                  : "border-brand-primary/40 bg-brand-primary/5"
              }`}
            >
              <span className="absolute left-1 top-1/2 h-1.5 w-2 -translate-y-1/2 rounded-sm bg-brand-primary/50" />
              {occupied && (
                <span className="absolute right-1 top-1/2 h-1.5 w-3 -translate-y-1/2 rounded-full bg-brand-primary/70" />
              )}
            </motion.div>
          ))}
        </div>
        {[0, 1].map((i) => (
          <Block key={i} delay={0.5 + i * 0.1} className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border border-brand-primary/60 bg-brand-primary/20" />
            <span className={`${line} h-1.5 flex-1`} />
            <span className="h-2 w-6 rounded-sm bg-brand-primary/60" />
          </Block>
        ))}
      </div>
    </div>
  );
}

/* ---------- 2. Fintech accounting ---------- */

function AccountingPreview() {
  return (
    <div className="grid h-full grid-cols-5 gap-2">
      <div className={`${box} col-span-3 flex flex-col gap-1.5 p-2`}>
        <Block delay={0.05} className="flex items-center gap-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-brand-primary/70" />
          <span className="h-1.5 w-6 rounded-full bg-brand-primary/70" />
          <span className="h-1.5 w-6 rounded-full bg-brand-primary/70" />
        </Block>
        <span className="h-px w-full bg-brand-primary/40" />
        {[0, 1, 2, 3].map((i) => (
          <Block key={i} delay={0.15 + i * 0.1} className="flex items-center gap-1.5">
            <span className={`${line} h-1.5 flex-1`} />
            <span className={`h-1.5 w-6 rounded-full ${i % 2 === 0 ? "bg-brand-primary/60" : "bg-brand-primary/15"}`} />
            <span className={`h-1.5 w-6 rounded-full ${i % 2 === 1 ? "bg-brand-primary/60" : "bg-brand-primary/15"}`} />
          </Block>
        ))}
        <span className="mt-auto h-px w-full bg-brand-primary/60" />
        <Block delay={0.7} className="flex items-center gap-1.5">
          <span className="h-2 flex-1 rounded-full bg-brand-primary/50" />
          <span className="h-2 w-6 rounded-full bg-brand-primary" />
          <span className="h-2 w-6 rounded-full bg-brand-primary" />
        </Block>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-between gap-1">
        <svg viewBox="0 0 40 40" className="h-[80px] w-[80px] text-brand-primary">
          <g transform="rotate(-90 20 20)">
            <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={6} />
            <motion.circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth={6}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 0.68 }}
              viewport={inView}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </g>
          <text x="20" y="22.5" textAnchor="middle" fontSize="7" className="fill-current font-mono">
            68%
          </text>
        </svg>
        <div className="flex w-full items-center justify-center gap-1.5">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 26 }}
            viewport={inView}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-2 rounded-sm bg-brand-primary/70"
          />
          <span className="font-mono text-[9px] text-brand-primary">=</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 26 }}
            viewport={inView}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="h-2 rounded-sm bg-brand-primary/70"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- 3. Architecture (Peregrine) ---------- */

function ArchitecturePreview() {
  const draw = (delay: number, duration = 0.8) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: inView,
    transition: { duration, delay, ease: "easeInOut" as const },
  });

  const fade = (delay: number, to = 0.35) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: to },
    viewport: inView,
    transition: { duration: 0.5, delay },
  });

  const hatch = Array.from({ length: 14 }, (_, i) => `M${196 + i * 8} 78 l-4 5`).join(" ");

  return (
    <div className={`${box} h-full overflow-hidden`}>
      <svg
        viewBox="0 0 350 100"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full text-brand-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.text x={8} y={6.5} fontSize={4.5} letterSpacing={0.8} fill="currentColor" stroke="none" className="font-mono" {...fade(0.2, 0.7)}>
          PLAN
        </motion.text>
        <motion.text x={200} y={12} fontSize={4.5} letterSpacing={0.8} fill="currentColor" stroke="none" className="font-mono" {...fade(0.5, 0.7)}>
          ELEVATION
        </motion.text>

        {/* floor plan */}
        <motion.path d="M8 10 H150 V78 H8 Z" strokeWidth={2.2} {...draw(0.1, 1.2)} />
        <motion.path d="M62 10 V56 M62 68 V78" strokeWidth={1.6} {...draw(0.8, 0.7)} />
        <motion.path d="M8 44 H30 M42 44 H62" strokeWidth={1.6} {...draw(0.9, 0.6)} />
        <motion.path d="M62 50 H150 M106 50 V78" strokeWidth={1.6} {...draw(1.0, 0.7)} />
        <motion.path d="M30 44 V56 M42 44 A12 12 0 0 1 30 56" strokeOpacity={0.6} {...draw(1.5, 0.5)} />
        <motion.path d="M62 56 H50 M62 68 A12 12 0 0 1 50 56" strokeOpacity={0.6} {...draw(1.6, 0.5)} />
        <motion.path d="M76 10 H100 M112 10 H136" strokeWidth={4} strokeOpacity={0.35} {...draw(1.4, 0.5)} />
        <motion.path d="M8 18 V34" strokeWidth={4} strokeOpacity={0.35} {...draw(1.5, 0.4)} />
        <motion.path d="M150 20 V40" strokeWidth={4} strokeOpacity={0.35} {...draw(1.5, 0.4)} />
        <motion.path d="M74 78 H96" strokeWidth={4} strokeOpacity={0.35} {...draw(1.6, 0.4)} />

        {/* furniture */}
        <motion.rect x={14} y={16} width={28} height={22} rx={2} fill="currentColor" strokeOpacity={0.5} {...fade(1.9, 0.18)} />
        <motion.path d="M17 19 H24 M17 35 H24" strokeOpacity={0.5} {...fade(2.0, 0.8)} />
        <motion.rect x={14} y={52} width={10} height={20} rx={2} fill="currentColor" strokeOpacity={0.5} {...fade(2.0, 0.18)} />
        <motion.circle cx={44} cy={60} r={4.5} fill="currentColor" strokeOpacity={0.5} {...fade(2.1, 0.18)} />
        <motion.rect x={72} y={16} width={32} height={11} rx={2} fill="currentColor" strokeOpacity={0.5} {...fade(2.1, 0.18)} />
        <motion.rect x={114} y={16} width={26} height={8} rx={1} fill="currentColor" strokeOpacity={0.5} {...fade(2.2, 0.18)} />
        <motion.circle cx={84} cy={64} r={7} fill="currentColor" strokeOpacity={0.5} {...fade(2.2, 0.18)} />
        <motion.rect x={112} y={56} width={30} height={7} rx={1} fill="currentColor" strokeOpacity={0.5} {...fade(2.3, 0.18)} />

        {/* dimension */}
        <motion.path d="M8 91 H150 M8 87 V95 M150 87 V95" strokeOpacity={0.7} {...draw(1.7, 0.8)} />
        <motion.text x={79} y={89} fontSize={4.5} textAnchor="middle" fill="currentColor" stroke="none" className="font-mono" {...fade(2.4, 0.8)}>
          14.20 m
        </motion.text>

        {/* compass */}
        <motion.circle cx={173} cy={30} r={9} strokeOpacity={0.6} {...draw(0.4, 0.8)} />
        <motion.path d="M173 22 L176.5 32 L173 30 L169.5 32 Z" fill="currentColor" fillOpacity={0.4} {...draw(0.8, 0.6)} />
        <motion.text x={173} y={46} fontSize={5} textAnchor="middle" fill="currentColor" stroke="none" className="font-mono" {...fade(1.2, 0.8)}>
          N
        </motion.text>

        {/* elevation */}
        <motion.path d="M190 78 H345" strokeWidth={1.4} {...draw(0.4, 0.7)} />
        <motion.path d={hatch} strokeOpacity={0.4} {...draw(1.0, 0.8)} />
        <motion.path d="M200 78 V38 H270 V78" strokeWidth={1.6} {...draw(0.6, 1.0)} />
        <motion.path d="M212 38 V22 H292 V38 Z" strokeWidth={1.6} {...draw(1.0, 1.0)} />
        <motion.path d="M206 20 H298" strokeWidth={2.4} {...draw(1.4, 0.6)} />
        <motion.rect x={207} y={48} width={34} height={30} fill="currentColor" {...fade(1.7, 0.15)} />
        <motion.path d="M207 48 H241 V78 M224 48 V78 M207 63 H241" strokeOpacity={0.7} {...draw(1.6, 0.8)} />
        <motion.rect x={250} y={52} width={12} height={26} fill="currentColor" {...fade(2.0, 0.4)} />
        <motion.rect x={220} y={26} width={64} height={8} fill="currentColor" {...fade(1.9, 0.25)} />
        <motion.path d="M236 26 V34 M252 26 V34 M268 26 V34" strokeOpacity={0.7} {...draw(2.0, 0.5)} />
        <motion.path d="M306 20 V78 M302 20 H310 M302 78 H310" strokeOpacity={0.7} {...draw(1.9, 0.8)} />
        <motion.circle cx={331} cy={62} r={11} strokeOpacity={0.6} {...draw(2.1, 0.7)} />
        <motion.path d="M331 73 V78 M326 60 Q331 55 336 60" strokeOpacity={0.6} {...draw(2.3, 0.5)} />

        {/* scan line */}
        <motion.line
          x1={0}
          x2={0}
          y1={2}
          y2={98}
          strokeOpacity={0.5}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [0, 350], opacity: [0, 0.6, 0.6, 0] }}
          viewport={inView}
          transition={{ duration: 2.4, delay: 3, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
        />
      </svg>
    </div>
  );
}

/* ---------- 4. Calculator ---------- */

function CalculatorPreview() {
  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "="];
  return (
    <div className="mx-auto flex h-full max-w-[200px] flex-col gap-1.5">
      <Block className={`${box} flex h-6 items-center justify-end px-2`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="font-mono text-[11px] text-brand-primary"
        >
          1,250.00
        </motion.span>
      </Block>
      <div className="grid flex-1 grid-cols-4 gap-1.5">
        {keys.map((k, i) => (
          <motion.span
            key={k}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={inView}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            className={`flex items-center justify-center rounded-sm border font-mono text-[9px] ${
              k === "="
                ? "border-brand-primary bg-brand-primary/40 text-brand-primary"
                : "border-brand-primary/40 bg-brand-primary/10 text-brand-primary/80"
            }`}
          >
            {k}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 5. Company website (IBGI) ---------- */

function CompanyPreview() {
  return (
    <BrowserFrame>
      <div className="flex h-full flex-col gap-1.5">
        <Block delay={0.05} className="flex items-center justify-between">
          <span className="h-2 w-8 rounded-full bg-brand-primary/80" />
          <div className="flex items-center gap-1.5">
            <span className={`${line} h-1.5 w-4`} />
            <span className={`${line} h-1.5 w-4`} />
            <span className={`${line} h-1.5 w-4`} />
            <span className="h-2.5 w-6 rounded-sm bg-brand-primary/80" />
          </div>
        </Block>

        <div className="grid flex-1 grid-cols-5 gap-2">
          <div className="col-span-3 flex flex-col justify-center gap-1">
            <Block delay={0.15} className="h-2 w-full rounded-full bg-brand-primary/60" />
            <Block delay={0.22} className="h-2 w-2/3 rounded-full bg-brand-primary/60" />
            <Block delay={0.3} className={`${line} h-1 w-5/6`} />
            <Block delay={0.38} className="mt-0.5 h-3 w-10 rounded-sm bg-brand-primary/80" />
          </div>
          <Block delay={0.25} className={`${box} col-span-2 h-full`} />
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <Block key={i} delay={0.5 + i * 0.08} className={`${box} flex flex-col items-center gap-0.5 py-1`}>
              <span className="h-1.5 w-1/2 rounded-full bg-brand-primary/70" />
              <span className={`${line} h-1 w-2/3`} />
            </Block>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ---------- 6. WordPress / WooCommerce storefront ---------- */

function WordPressPreview() {
  return (
    <BrowserFrame>
      <div className="flex h-full flex-col gap-1.5">
        {/* header: logo, links, cart with badge */}
        <Block delay={0.05} className="flex items-center justify-between">
          <span className="h-2 w-8 rounded-full bg-brand-primary/80" />
          <div className="flex items-center gap-1.5">
            <span className={`${line} h-1.5 w-4`} />
            <span className={`${line} h-1.5 w-4`} />
            <div className="relative">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h3l2.5 11h9L20 7H7" />
                <circle cx="10" cy="19" r="1.2" />
                <circle cx="17" cy="19" r="1.2" />
              </svg>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={inView}
                transition={{ type: "spring", delay: 1.1 }}
                className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand-primary"
              />
            </div>
          </div>
        </Block>

        {/* product grid */}
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <Block key={i} delay={0.2 + i * 0.12} className={`${box} flex flex-col gap-1 p-1`}>
              <div className="flex-1 rounded-sm bg-brand-primary/20" />
              <span className={`${line} h-1 w-3/4`} />
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-4 rounded-full bg-brand-primary/70" />
                <span className="h-2 w-4 rounded-sm bg-brand-primary/80" />
              </div>
            </Block>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function Preview({ variant }: { variant: Variant }) {
  switch (variant) {
    case "hospital":
      return <HospitalPreview />;
    case "accounting":
      return <AccountingPreview />;
    case "architecture":
      return <ArchitecturePreview />;
    case "calculator":
      return <CalculatorPreview />;
    case "company":
      return <CompanyPreview />;
    case "wordpress":
      return <WordPressPreview />;
  }
}

/* ---------- page ---------- */

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
                  A few things
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">I&apos;ve shipped.</span>
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                  Representative projects from recent client work — spanning
                  React software, business websites, and WordPress. Full case
                  studies available on request.
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
                    {["React", "Website", "WordPress"].map((cat) => (
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
              {filtered.map((project, i) => {
                const isExternal = Boolean(project.href);
                return (
                  <motion.a
                    key={project.title}
                    href={project.href ?? "/contact"}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="corner-marks group block overflow-hidden rounded-sm border border-brand-border bg-brand-surface transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_-16px_rgba(27,75,122,0.18)]"
                  >
                    {/* Animated preview */}
                    <div className="h-40 bg-brand-grid-fine bg-grid-fine p-4">
                      <Preview variant={project.variant} />
                    </div>

                    {/* Card body */}
                    <div className="border-t border-brand-border p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-brand-muted">{project.tag}</span>
                          <ArrowUpRight
                            size={15}
                            className="text-brand-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-primary"
                          />
                        </div>
                      </div>

                      <h3 className="font-display text-base font-semibold text-brand-ink transition-colors duration-200 group-hover:text-brand-primary">
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
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-brand-border bg-brand-surfaceAlt py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              <span className="h-px w-6 bg-brand-primary" />
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