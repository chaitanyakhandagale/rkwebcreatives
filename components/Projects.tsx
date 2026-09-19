// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// /**
//  * Swap these entries for real case studies — title, category, short result,
//  * and a live/screenshot link. The bars in `preview` are a stylized layout
//  * sketch (not a real screenshot) so the section works before you add photos.
//  */
// const projects = [
//   {
//     category: "WordPress",
//     title: "Boutique Retail Storefront",
//     result: "Custom WooCommerce theme, 38% faster load time.",
//     preview: [70, 100, 45, 45, 45],
//   },
//   {
//     category: "Next.js",
//     title: "Fitness Studio Booking App",
//     result: "Class scheduling + payments, built on Next.js and Node.",
//     preview: [50, 50, 100, 60, 40],
//   },
//   {
//     category: "Static + SEO",
//     title: "Local Roastery Relaunch",
//     result: "Static rebuild + local SEO, 2.4x organic traffic in 90 days.",
//     preview: [100, 30, 65, 65, 65],
//   },
//   {
//     category: "React",
//     title: "Legal Practice Client Portal",
//     result: "Secure document intake portal with role-based access.",
//     preview: [40, 60, 100, 100, 40],
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="relative bg-brand-bg py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
//         >
//           <div className="max-w-xl">
//             <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
//               Selected work
//             </span>
//             <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
//               A few things I&apos;ve shipped.
//             </h2>
//           </div>
//           <p className="max-w-xs text-sm text-brand-muted">
//             Representative project types from recent client work — full
//             case studies available on request.
//           </p>
//         </motion.div>

//         <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
//           {projects.map((project, i) => (
//             <motion.a
//               href="#contact"
//               key={project.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               whileHover={{ y: -4 }}
//               className="corner-marks group block overflow-hidden rounded-sm border border-brand-border bg-brand-surfaceAlt"
//             >
//               <div className="flex h-44 items-end gap-2 bg-brand-grid-fine bg-grid-fine p-6">
//                 {project.preview.map((h, idx) => (
//                   <motion.span
//                     key={idx}
//                     initial={{ height: 0 }}
//                     whileInView={{ height: `${h}%` }}
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.6, delay: 0.15 + idx * 0.06 }}
//                     className="w-full rounded-t-sm border border-brand-primary/50 bg-brand-primary/10"
//                   />
//                 ))}
//               </div>

//               <div className="border-t border-brand-border p-6">
//                 <div className="flex items-center justify-between">
//                   <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
//                     {project.category}
//                   </span>
//                   <ArrowUpRight
//                     size={16}
//                     className="text-brand-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-primary"
//                   />
//                 </div>
//                 <h3 className="mt-3 font-display text-lg text-brand-ink">
//                   {project.title}
//                 </h3>
//                 <p className="mt-2 text-sm leading-relaxed text-brand-muted">
//                   {project.result}
//                 </p>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Variant =
  | "hospital"
  | "accounting"
  | "architecture"
  | "calculator"
  | "company";

/**
 * Each entry: title, category, short result, `variant` (which animated
 * preview to show), and an optional `href`.
 * If `href` is set, the card opens the live site in a new tab;
 * otherwise it scrolls to the contact section.
 */
const projects: {
  category: string;
  title: string;
  result: string;
  variant: Variant;
  href: string | null;
}[] = [
  {
    category: "React + Node.js",
    title: "Hospital Management System",
    result:
      "Full-stack software for managing patients, beds, and appointments, built with React and Node.js.",
    variant: "hospital",
    href: null,
  },
  {
    category: "React + Node.js",
    title: "Fintech Accounting Software",
    result:
      "Accounting platform for ledgers, invoices, and financial reporting, built with React and Node.js.",
    variant: "accounting",
    href: null,
  },
  {
    category: "Architecture Website",
    title: "Peregrine",
    result: "Portfolio website for an architecture practice, designed and developed end to end.",
    variant: "architecture",
    href: "https://pereegrine.com/",
  },
  {
    category: "Multi-page Website",
    title: "ILoveCalculators",
    result: "Multi-page calculator website with a dedicated page for each tool.",
    variant: "calculator",
    href: "https://ilovecalculators.com/",
  },
  {
    category: "Company Website",
    title: "IBGI Solutions",
    result: "Corporate website presenting the company, its services, and contact details.",
    variant: "company",
    href: "https://www.ibgisolutions.com/",
  },
];

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
  // 1 = occupied bed, 0 = free bed
  const beds = [1, 1, 0, 1, 0, 1, 1, 0];

  return (
    <div className="grid h-full grid-cols-5 gap-2">
      {/* left: medical cross + ECG */}
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

      {/* right: bed grid + appointments */}
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
              {/* pillow */}
              <span className="absolute left-1 top-1/2 h-1.5 w-2 -translate-y-1/2 rounded-sm bg-brand-primary/50" />
              {/* patient */}
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
      {/* ledger: description | debit | credit */}
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

      {/* donut chart + balance bars */}
      <div className="col-span-2 flex flex-col items-center justify-between gap-1">
        <svg viewBox="0 0 40 40" className="h-[88px] w-[88px] text-brand-primary">
          <g transform="rotate(-90 20 20)">
            <circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.2}
              strokeWidth={6}
            />
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
          <text
            x="20"
            y="22.5"
            textAnchor="middle"
            fontSize="7"
            className="fill-current font-mono"
          >
            68%
          </text>
        </svg>
        {/* debit = credit */}
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
  // draws a stroke from nothing to complete
  const draw = (delay: number, duration = 0.8) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: inView,
    transition: { duration, delay, ease: "easeInOut" as const },
  });

  // fades a filled shape in
  const fade = (delay: number, to = 0.35) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: to },
    viewport: inView,
    transition: { duration: 0.5, delay },
  });

  // hatch marks under the elevation's ground line
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
        {/* ---------- captions ---------- */}
        <motion.text x={8} y={6.5} fontSize={4.5} letterSpacing={0.8} fill="currentColor" stroke="none" className="font-mono" {...fade(0.2, 0.7)}>
          PLAN
        </motion.text>
        <motion.text x={200} y={12} fontSize={4.5} letterSpacing={0.8} fill="currentColor" stroke="none" className="font-mono" {...fade(0.5, 0.7)}>
          ELEVATION
        </motion.text>

        {/* ---------- FLOOR PLAN ---------- */}
        {/* outer walls */}
        <motion.path d="M8 10 H150 V78 H8 Z" strokeWidth={2.2} {...draw(0.1, 1.2)} />
        {/* inner walls (with door gaps) */}
        <motion.path d="M62 10 V56 M62 68 V78" strokeWidth={1.6} {...draw(0.8, 0.7)} />
        <motion.path d="M8 44 H30 M42 44 H62" strokeWidth={1.6} {...draw(0.9, 0.6)} />
        <motion.path d="M62 50 H150 M106 50 V78" strokeWidth={1.6} {...draw(1.0, 0.7)} />

        {/* door leaves + swing arcs */}
        <motion.path d="M30 44 V56 M42 44 A12 12 0 0 1 30 56" strokeOpacity={0.6} {...draw(1.5, 0.5)} />
        <motion.path d="M62 56 H50 M62 68 A12 12 0 0 1 50 56" strokeOpacity={0.6} {...draw(1.6, 0.5)} />

        {/* windows (thick faded strokes on the outer wall) */}
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

        {/* dimension line under the plan */}
        <motion.path d="M8 91 H150 M8 87 V95 M150 87 V95" strokeOpacity={0.7} {...draw(1.7, 0.8)} />
        <motion.text x={79} y={89} fontSize={4.5} textAnchor="middle" fill="currentColor" stroke="none" className="font-mono" {...fade(2.4, 0.8)}>
          14.20 m
        </motion.text>

        {/* ---------- COMPASS ---------- */}
        <motion.circle cx={173} cy={30} r={9} strokeOpacity={0.6} {...draw(0.4, 0.8)} />
        <motion.path d="M173 22 L176.5 32 L173 30 L169.5 32 Z" fill="currentColor" fillOpacity={0.4} {...draw(0.8, 0.6)} />
        <motion.text x={173} y={46} fontSize={5} textAnchor="middle" fill="currentColor" stroke="none" className="font-mono" {...fade(1.2, 0.8)}>
          N
        </motion.text>

        {/* ---------- ELEVATION ---------- */}
        {/* ground line + hatching */}
        <motion.path d="M190 78 H345" strokeWidth={1.4} {...draw(0.4, 0.7)} />
        <motion.path d={hatch} strokeOpacity={0.4} {...draw(1.0, 0.8)} />

        {/* ground-floor volume */}
        <motion.path d="M200 78 V38 H270 V78" strokeWidth={1.6} {...draw(0.6, 1.0)} />
        {/* cantilevered upper volume */}
        <motion.path d="M212 38 V22 H292 V38 Z" strokeWidth={1.6} {...draw(1.0, 1.0)} />
        {/* roof slab */}
        <motion.path d="M206 20 H298" strokeWidth={2.4} {...draw(1.4, 0.6)} />

        {/* ground-floor glazing + mullions */}
        <motion.rect x={207} y={48} width={34} height={30} fill="currentColor" {...fade(1.7, 0.15)} />
        <motion.path d="M207 48 H241 V78 M224 48 V78 M207 63 H241" strokeOpacity={0.7} {...draw(1.6, 0.8)} />
        {/* entry door */}
        <motion.rect x={250} y={52} width={12} height={26} fill="currentColor" {...fade(2.0, 0.4)} />
        {/* upper ribbon window + mullions */}
        <motion.rect x={220} y={26} width={64} height={8} fill="currentColor" {...fade(1.9, 0.25)} />
        <motion.path d="M236 26 V34 M252 26 V34 M268 26 V34" strokeOpacity={0.7} {...draw(2.0, 0.5)} />

        {/* height dimension */}
        <motion.path d="M306 20 V78 M302 20 H310 M302 78 H310" strokeOpacity={0.7} {...draw(1.9, 0.8)} />

        {/* tree */}
        <motion.circle cx={331} cy={62} r={11} strokeOpacity={0.6} {...draw(2.1, 0.7)} />
        <motion.path d="M331 73 V78 M326 60 Q331 55 336 60" strokeOpacity={0.6} {...draw(2.3, 0.5)} />

        {/* ---------- scan line (loops after the drawing finishes) ---------- */}
        <motion.line
          x1={0}
          x2={0}
          y1={2}
          y2={98}
          strokeOpacity={0.5}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [0, 350], opacity: [0, 0.6, 0.6, 0] }}
          viewport={inView}
          transition={{
            duration: 2.4,
            delay: 3,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      </svg>
    </div>
  );
}

/* ---------- 4. Calculator (unchanged) ---------- */

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
        {/* nav: logo, links, contact button */}
        <Block delay={0.05} className="flex items-center justify-between">
          <span className="h-2 w-8 rounded-full bg-brand-primary/80" />
          <div className="flex items-center gap-1.5">
            <span className={`${line} h-1.5 w-4`} />
            <span className={`${line} h-1.5 w-4`} />
            <span className={`${line} h-1.5 w-4`} />
            <span className="h-2.5 w-6 rounded-sm bg-brand-primary/80" />
          </div>
        </Block>

        {/* hero: headline + call to action + image */}
        <div className="grid flex-1 grid-cols-5 gap-2">
          <div className="col-span-3 flex flex-col justify-center gap-1">
            <Block delay={0.15} className="h-2 w-full rounded-full bg-brand-primary/60" />
            <Block delay={0.22} className="h-2 w-2/3 rounded-full bg-brand-primary/60" />
            <Block delay={0.3} className={`${line} h-1 w-5/6`} />
            <Block delay={0.38} className="mt-0.5 h-3 w-10 rounded-sm bg-brand-primary/80" />
          </div>
          <Block delay={0.25} className={`${box} col-span-2 h-full`} />
        </div>

        {/* stats / services strip */}
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
  }
}

/* ---------- section ---------- */

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
            Representative software and websites from recent work — full
            case studies available on request.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const isExternal = Boolean(project.href);
            const isLastOdd =
              i === projects.length - 1 && projects.length % 2 === 1;

            return (
              <motion.a
                href={project.href ?? "#contact"}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`corner-marks group block overflow-hidden rounded-sm border border-brand-border bg-brand-surfaceAlt ${
                  isLastOdd ? "sm:col-span-2" : ""
                }`}
              >
                <div className="h-44 bg-brand-grid-fine bg-grid-fine p-4">
                  <div className={isLastOdd ? "mx-auto h-full max-w-md" : "h-full"}>
                    <Preview variant={project.variant} />
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}