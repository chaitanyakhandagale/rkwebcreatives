import React from "react";
// import Count from "../../components/count";
// import Partners from "../../components/partners";
import { MdArrowForward } from "react-icons/md";
import { FiEye, FiTarget, FiStar } from "react-icons/fi";
import Count from "@/components/Count";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    id: 1,
    name: "Rahul Kulkarni",
    post: "Founder & Lead Developer",
    image:
      "https://kalamiti.in/wp-content/uploads/2024/09/Ketaki-Dhobale-new.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    post: "UI/UX Designer",
    image:
      "https://kalamiti.in/wp-content/uploads/2024/09/Ketaki-Dhobale-new.jpg",
  },
  {
    id: 3,
    name: "Amit Desai",
    post: "Full Stack Developer",
    image:
      "https://kalamiti.in/wp-content/uploads/2024/09/Ketaki-Dhobale-new.jpg",
  },
  {
    id: 4,
    name: "Sneha Patil",
    post: "SEO & Digital Marketing",
    image:
      "https://kalamiti.in/wp-content/uploads/2024/09/Ketaki-Dhobale-new.jpg",
  },
];

const values = [
  "Clean Code & Best Practices",
  "Client-Centered Delivery",
  "Continuous Innovation",
  "Transparent Communication",
];

/*
 * NOTE ON THEME:
 * This page uses the same `brand-*` design tokens as RK Web Creatives
 * (defined once in app/globals.css as CSS variables and wired into
 * tailwind.config.ts). If this project doesn't have those tokens yet,
 * copy the :root block and the `brand` color group from the RK Web
 * Creatives project — everything below assumes they exist:
 *   brand-bg, brand-surface, brand-surfaceAlt, brand-border, brand-ink,
 *   brand-muted, brand-primary, brand-primaryDark, brand-accent
 * Fonts assumed: font-display (headings), font-body (paragraphs),
 * font-mono (eyebrow labels / small caps tags).
 */

/* ─── Reusable Section Label ─────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-px bg-brand-primary" />
      <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-brand-primary">
        {children}
      </span>
    </div>
  );
}
/* ─── Page ───────────────────────────────────────────────────────────────── */
const About = () => {
  return (
    <>
      <style>{`
        .team-card:hover .team-img { transform: scale(1.07); }
        .vmv-card:hover { transform: translateY(-6px); }
      `}</style>

      <div className="font-body bg-brand-bg text-brand-ink">
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-bg pt-28 pb-24">
          {/* Same ambient grid as home hero */}
          <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-70 mask-[radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
          {/* Same glow orbs as home hero */}
          <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left — text */}
            <div>
              {/* Eyebrow — same style as home hero */}
              <span className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                About RK Web Creatives
              </span>

              <h1 className="mt-6 font-display text-4xl leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
                The studio behind
                <br />
                the <span className="text-brand-primary">build.</span>
              </h1>

              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-brand-muted">
                RK Web Creatives is a freelance web studio specialising in
                WordPress, React, and Next.js — designing and shipping digital
                products that are fast, accessible, and built to last.
              </p>

              {/* Tech stack badges — same border/text style as home */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "WordPress",
                  "React",
                  "Next.js",
                  "Node.js",
                  "SEO",
                  "Hosting",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-brand-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — studio profile panel, mirrors home hero browser card */}
            <div className="relative mx-auto hidden w-full max-w-md lg:block">
              <div className="corner-marks overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-[0_20px_60px_-25px_rgba(16,27,45,0.25)]">
                {/* Panel chrome */}
                <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surfaceAlt px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-muted/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/80" />
                  <span className="ml-3 flex-1 truncate rounded-sm bg-brand-bg/60 px-3 py-1 font-mono text-[10px] text-brand-muted">
                    rkwebcreatives.com/about
                  </span>
                </div>
                {/* Panel body */}
                <div className="divide-y divide-brand-border">
                  {[
                    { label: "Studio", value: "RK Web Creatives" },
                    { label: "Founded", value: "2022" },
                    { label: "Stack", value: "WordPress · React · Next.js" },
                    { label: "Location", value: "Remote-first" },
                    { label: "Status", value: "Available for projects" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center gap-4 px-5 py-3.5"
                    >
                      <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                        {row.label}
                      </span>
                      <span className="font-mono text-[11px] text-brand-ink">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                <span>Fig. 02 — Studio profile</span>
                <span>Est. 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ABOUT / OWNER SECTION
        ══════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-24">
          <div className="grid md:grid-cols-[420px_1fr] gap-14 items-start">
            {/* Owner Photo */}
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-primary/20 rounded-tr-[60px]" />
              <div className="corner-marks relative w-full h-110 rounded-tr-[60px] overflow-hidden border border-brand-border shadow-[0_20px_60px_-25px_rgba(16,27,45,0.25)]">
                <img
                  src="https://kalamiti.in/wp-content/uploads/2024/09/Ketaki-Dhobale-new.jpg"
                  alt="Kajal Jadhav — Director"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-ink/80 via-transparent to-transparent" />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  {/* <p className="font-display text-xl text-brand-surface font-normal">
                    Kajal Jadhav
                  </p>
                  <p className="text-brand-accent text-xs tracking-widest uppercase font-medium mt-0.5">
                    Director
                  </p> */}
                </div>
              </div>

              {/* Trust badge floating card */}
              {/* <div className="absolute -bottom-5 -right-5 bg-brand-primary text-brand-surface px-5 py-4 shadow-lg rounded-sm">
                <div className="flex items-center gap-2 mb-1">
                  <MdVerified size={16} className="text-brand-accent" />
                  <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">
                    RERA Certified
                  </span>
                </div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-[10px] text-brand-surface/60 uppercase tracking-wider">
                  Years of Excellence
                </p>
              </div> */}
            </div>

            {/* Text Content */}
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-brand-ink leading-tight mb-6">
                About
                <br />
                RK Web Creatives
              </h2>

              <div className="space-y-4 text-brand-muted text-sm font-light leading-[1.85]">
                <p>
                  Founded in 2022, RK Web Creatives is a freelance web studio
                  specialising in WordPress, React, Node.js, and Next.js. We
                  partner with startups, small businesses, and growing brands to
                  design and build digital products that are fast, accessible,
                  and built to last — handling everything from initial
                  wireframes through to deployment and ongoing support under one
                  roof.
                </p>
              </div>

              {/* Key points */}
              <div className="grid grid-cols-2 gap-3 mt-7">
                {[
                  "40+ Happy Clients",
                  "60+ Projects Delivered",
                  "WordPress & Next.js Experts",
                  "End-to-End Studio",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-brand-ink font-medium"
                  >
                    <span className="w-5 h-5 rounded-sm bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 mt-8 bg-brand-primary text-brand-surface text-sm font-semibold px-7 py-3.5 rounded-sm hover:bg-brand-primaryDark transition-all duration-200 shadow-[0_12px_30px_-12px_rgba(27,75,122,0.45)]"
              >
                Get in Touch <MdArrowForward size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <Count />

        {/* ══════════════════════════════════════════
            VISION / MISSION / VALUES
        ══════════════════════════════════════════ */}
        <section className="bg-brand-surfaceAlt py-20 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-px bg-brand-primary" />
                <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-brand-primary">
                  Our Foundation
                </span>
                <span className="w-8 h-px bg-brand-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-brand-ink">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Vision */}
              <div className="vmv-card group bg-brand-surface border border-brand-border p-8 rounded-sm transition-all duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,27,45,0.2)] hover:border-brand-primary/40">
                <div className="w-12 h-12 rounded-sm bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <FiEye
                    size={20}
                    className="text-brand-primary group-hover:text-brand-surface transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="w-8 h-0.5 bg-brand-accent mb-4 rounded-full" />
                <h3 className="font-display text-2xl font-normal text-brand-ink mb-3">
                  Our Vision
                </h3>
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  To be the go-to web studio for businesses that want a site
                  built right the first time — performant, accessible, and
                  designed to convert visitors into customers.
                </p>
              </div>

              {/* Mission — elevated card */}
              <div className="vmv-card group bg-brand-primary p-8 rounded-sm transition-all duration-300 hover:shadow-[0_25px_55px_-20px_rgba(27,75,122,0.45)] md:-mt-4">
                <div className="w-12 h-12 rounded-sm bg-brand-surface/10 flex items-center justify-center mb-6 group-hover:bg-brand-surface/20 transition-colors duration-300">
                  <FiTarget
                    size={20}
                    className="text-brand-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="w-8 h-0.5 bg-brand-accent mb-4 rounded-full" />
                <h3 className="font-display text-2xl font-normal text-brand-surface mb-3">
                  Our Mission
                </h3>
                <p className="text-brand-surface/70 text-sm font-light leading-relaxed">
                  To deliver clean, well-engineered web products on time and on
                  budget — carrying every project from discovery through launch
                  with clear communication and zero handoff gaps.
                </p>
              </div>

              {/* Values */}
              <div className="vmv-card group bg-brand-surface border border-brand-border p-8 rounded-sm transition-all duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,27,45,0.2)] hover:border-brand-primary/40">
                <div className="w-12 h-12 rounded-sm bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <FiStar
                    size={20}
                    className="text-brand-primary group-hover:text-brand-surface transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="w-8 h-0.5 bg-brand-accent mb-4 rounded-full" />
                <h3 className="font-display text-2xl font-normal text-brand-ink mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  {values.map((v) => (
                    <li
                      key={v}
                      className="flex items-center gap-3 text-sm text-brand-muted font-light"
                    >
                      <span className="w-5 h-5 rounded-sm bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      </span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TEAM
        ══════════════════════════════════════════ */}
        <section className="py-20 px-6 md:px-20 bg-brand-bg">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-px bg-brand-primary" />
                <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-brand-primary">
                  The People Behind Us
                </span>
                <span className="w-8 h-px bg-brand-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-brand-ink">
                The People Behind{" "}
                <em className="italic text-brand-primary">RK</em>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="team-card group bg-brand-surface rounded-sm overflow-hidden shadow-sm border border-brand-border hover:shadow-[0_20px_45px_-20px_rgba(16,27,45,0.2)] hover:border-brand-primary/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-52 md:h-44">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-img w-full h-full object-cover object-top transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="px-3 py-3.5 text-center border-t-2 border-transparent group-hover:border-brand-primary transition-colors duration-300">
                    <h3 className="text-[13px] font-semibold text-brand-ink">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] text-brand-primary font-medium mt-0.5 tracking-wide uppercase">
                      {member.post}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PARTNERS
        ══════════════════════════════════════════ */}
        {/* <section className="bg-brand-surfaceAlt py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Trusted By</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-brand-ink">
                Our <em className="italic text-brand-primary">Partners</em>
              </h2>
            </div>
            <Partners />
          </div>
        </section> */}

        {/* <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
              Let&apos;s build
            </span>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Have a site to design, rebuild, or finally get found online?
            </h2>
            <a
              href="mailto:hello@rkwebcreatives.com"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-brand-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-bg transition-transform hover:-translate-y-0.5"
            >
              <Mail size={15} />
              hello@rkwebcreatives.com
            </a>
          </motion.div>
        </div> */}

      </div>
    </>
  );
};

export default About;
