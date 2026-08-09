import {
  ArrowRight,
  ArrowUpRight,
  Layout,
  Code2,
  Megaphone,
  Server,
  MessagesSquare,
} from "lucide-react"

/* ─── Data ─────────────────────────────────────────────────────────────── */
const services = [
  {
    icon: Layout,
    number: "01",
    title: "WordPress Website Design",
    desc: "Custom-built WordPress sites that are fast, on-brand, and easy to update.",
    detail:
      "Custom themes, not a page-builder afterthought — clean information architecture and on-page SEO basics baked in, with a CMS your team can actually manage without calling a developer for every text change.",
  },
  {
    icon: Code2,
    number: "02",
    title: "React, Node & Next.js Development",
    desc: "Full-stack builds for products that need real application logic.",
    detail:
      "Dashboards, booking systems, member portals, and storefronts — built on React, Node, and Next.js, with clean APIs and a codebase the next developer can actually read.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Digital Marketing",
    desc: "SEO structure and campaigns that get the site found, not just built.",
    detail:
      "On-page SEO, Google Business setup, and conversion-focused landing pages, so enquiries start coming in after launch instead of the site sitting unfound.",
  },
  {
    icon: Server,
    number: "04",
    title: "Static Website Hosting",
    desc: "Fast, reliable hosting with free SSL and a global CDN.",
    detail:
      "Static infrastructure with near-zero downtime, automatic SSL, and CDN delivery — no server to patch, monitor, or babysit.",
  },
  {
    icon: MessagesSquare,
    number: "05",
    title: "Technical Consultation",
    desc: "Expert advice on stack, scope, and feasibility before you commit.",
    detail:
      "A second opinion on architecture, budget, or timeline — useful whether you're scoping a new build or trying to rescue a stalled one.",
  },
]

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "We map out your goals, users, and constraints — audit what exists, if anything — before a single screen gets designed.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Wireframes through to polished UI, refined with you in a handful of focused reviews rather than endless rounds.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Development happens in the open — staging links and regular check-ins so you always know where the project stands.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Launch, documentation handed over, and a support plan so the site keeps performing after we ship.",
  },
]

/* ─── Page ─────────────────────────────────────────────────────────────── */
export function ServicesPage() {
  return (
    <div className="bg-brand-bg text-brand-ink">
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 25%, #0f2d6b 50%, #1B4B7A 72%, #1e6fa8 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
          <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-12">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-blue-300">
                  Services
                </span>
                <span className="h-px max-w-12 flex-1 bg-white/20" />
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
                Five disciplines.
                <br />
                One studio,{" "}<span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">start to finish.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-300">
                We design, build, and market — carrying a project through
                every stage under one roof, so nothing gets lost in a
                handoff between vendors.
              </p>
              <a
                href="#services-list"
                className="group mt-10 inline-flex items-center gap-3 rounded-lg border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-400/20"
              >
                See What We Offer
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Blueprint rule-grid */}
            <div className="hidden md:block" aria-hidden="true">
              <div className="grid grid-cols-5 border-t border-white/10">
                {services.map((s) => (
                  <div key={s.number} className="flex flex-col items-center gap-3 border-r border-white/10 py-6 last:border-r-0">
                    <span className="font-mono text-lg text-blue-300/50">{s.number}</span>
                    <span className="h-10 w-px bg-white/10" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Five services, one continuous process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES LIST
      ══════════════════════════════════════════ */}
      <section id="services-list" className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-lg">
            <div className="mb-3 flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-primary">
                What We Do
              </span>
              <span className="h-px max-w-12 flex-1 bg-brand-border" />
            </div>
            <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">
              Our Services
            </h2>
          </div>

          <div className="divide-y divide-brand-border border-t border-brand-border">
            {services.map((s) => (
              <div
                key={s.title}
                className="group grid gap-6 py-10 sm:grid-cols-[80px_1fr] sm:gap-8 md:grid-cols-[80px_1fr_1fr] md:items-start"
              >
                <span className="font-mono text-2xl text-brand-muted/40">
                  {s.number}
                </span>

                <div>
                  <s.icon
                    className="size-7 text-brand-primary"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-5 font-display text-sm font-semibold uppercase tracking-widest text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-brand-muted">
                    {s.desc}
                  </p>
                </div>

                <p className="font-body text-sm leading-relaxed text-brand-muted md:mt-1">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className="border-t border-brand-border bg-brand-surfaceAlt py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-lg">
            <div className="mb-3 flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-primary">
                How We Work
              </span>
              <span className="h-px max-w-12 flex-1 bg-brand-border" />
            </div>
            <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">
              Four stages, one team throughout.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-brand-border">
            {process.map((step) => (
              <div key={step.number} className="px-0 lg:px-6">
                <span className="font-display text-4xl text-brand-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════ */}
      <section className="border-t border-brand-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-primary">
                  Start a Project
                </span>
                <span className="h-px max-w-12 flex-1 bg-brand-border" />
              </div>
              <h2 className="max-w-md font-display text-3xl leading-[1.1] text-brand-ink sm:text-4xl">
                Tell us what you&apos;re building — we&apos;ll tell you what it takes.
              </h2>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-brand-primary px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-brand-surface transition-colors hover:bg-brand-primaryDark"
            >
              Book a Consultation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage