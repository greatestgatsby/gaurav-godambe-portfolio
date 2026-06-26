import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AudioPlayer from "@/components/AudioPlayer";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const Hero3D = lazy(() => import("@/components/Hero3D"));

const BOOKING_URL = "/contact";
const EMAIL = "Gaurav.g83@gmail.com";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};


function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-content px-6">
        <motion.p {...fadeUp} className="eyebrow mb-5">
          Finance leadership · AI builds, end-to-end
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl"
        >
          I solve finance and operations problems by{" "}
          <span className="text-brand">building the AI systems</span> that fix them.
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg"
        >
          15+ years in finance leadership, now designing and shipping AI-powered web apps,
          automations, and dashboards. I diagnose the business problem and build the working
          solution — end-to-end, fast.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to={BOOKING_URL}
            className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Book a 20-min scoping call
          </Link>
          <a
            href="#work"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-fog"
          >
            See selected work
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.26 }}
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fog"
        >
          <span>15+ yrs finance &amp; strategy</span>
          <span className="text-fog/50">/</span>
          <span>End-to-end AI builds</span>
          <span className="text-fog/50">/</span>
          <span>40%+ manual-work reduction</span>
        </motion.div>
      </div>
    </section>
  );
}

function Edge() {
  const points = [
    "I've sat in the finance seat — I know which problems are actually worth solving.",
    "I design and ship the full solution — app, automation, dashboard — not just a slide deck.",
    "AI-native development lets me build in days what used to take teams months.",
  ];
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <motion.p {...fadeUp} className="eyebrow mb-4">The edge</motion.p>
        <motion.h2
          {...fadeUp}
          className="mb-12 max-w-2xl font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
        >
          Most consultants advise. I build.
        </motion.h2>
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-ink p-7"
            >
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-bone">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  name: string;
  problem: string;
  built: string;
  metric: string;
  metricLabel: string;
};

const projects: Project[] = [
  {
    name: "IR Targeting Intelligence",
    problem: "An investor-relations team couldn't prioritise which funds to approach.",
    built: "Built an AI propensity-scoring engine with web-evidenced fund reasoning.",
    metric: "3 days → 2 hrs",
    metricLabel: "to a ranked shortlist",
  },
  {
    name: "Finance Automation Suite",
    problem: "A finance team buried in manual reporting and reconciliation.",
    built: "Built automated Power BI pipelines with reconciliation logic.",
    metric: "40%",
    metricLabel: "less manual effort",
  },
  {
    name: "AI Customer Agents",
    problem: "An SMB drowning in repetitive WhatsApp queries.",
    built: "Built an AI agent on the Meta Cloud API to handle the front line.",
    metric: "hrs → secs",
    metricLabel: "response time",
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <motion.p {...fadeUp} className="eyebrow mb-4">Selected work</motion.p>
      <motion.h2
        {...fadeUp}
        className="mb-14 max-w-2xl font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
      >
        Problems diagnosed, systems shipped.
      </motion.h2>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="group flex flex-col rounded-xl border border-line bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50"
          >
            <h3 className="font-display text-lg font-semibold tracking-tight text-bone">{p.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              <span className="text-bone/90">Problem.</span> {p.problem}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fog">
              <span className="text-bone/90">Built.</span> {p.built}
            </p>
            <div className="mt-auto pt-7">
              <div className="font-display text-2xl font-bold tracking-tight text-brand">
                {p.metric}
              </div>
              <div className="mt-1 font-mono text-xs text-fog">{p.metricLabel}</div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/portfolio" className="font-mono text-xs text-brand hover:underline">
          See full portfolio →
        </Link>
      </div>
    </section>
  );
}

const services = [
  {
    name: "AI Agents & Automation",
    outcome: "Cut repetitive work and response times across your front line and back office.",
    tag: "Retainer",
  },
  {
    name: "Finance & FP&A Dashboards",
    outcome: "See the numbers that drive decisions — automatically, without the manual rebuild.",
    tag: "Retainer",
  },
  {
    name: "Custom AI Web Apps",
    outcome: "Ship the internal tool or client-facing product you need — designed and built end-to-end.",
    tag: "Project or retainer",
  },
];

function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <motion.p {...fadeUp} className="eyebrow mb-4">How I can help</motion.p>
        <motion.h2
          {...fadeUp}
          className="mb-14 max-w-2xl font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
        >
          Built around your business outcome, not the tech.
        </motion.h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-xl border border-line bg-ink p-7"
            >
              <div className="mb-5 inline-block rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-fog">
                {s.tag}
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-bone">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{s.outcome}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="font-mono text-xs text-brand hover:underline">
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p {...fadeUp} className="eyebrow mb-4">About</motion.p>
          <motion.h2
            {...fadeUp}
            className="mb-6 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-bone md:text-3xl"
          >
            I speak both languages: the business problem and the build.
          </motion.h2>
          <motion.div {...fadeUp} className="space-y-4 text-[0.95rem] leading-relaxed text-fog">
            <p>
              I spent 15+ years leading finance — FP&amp;A, forecasting, budgeting, strategy —
              before becoming the person who builds the AI systems finance and operations teams
              actually need.
            </p>
            <p>
              Because I develop with modern, AI-native tooling, I can take an idea to a working,
              deployed solution end-to-end — and fast. That means you get someone who understands
              the problem from the inside and can ship the fix, rather than handing you a deck.
            </p>
            <p>
              I run{" "}
              <a
                href="https://alphatronsolutions.com"
                target="_blank"
                rel="noreferrer"
                className="text-brand underline-offset-4 hover:underline"
              >
                Alphatron Solutions
              </a>
              , building AI-powered apps, automations, and dashboards for growing companies.
            </p>
          </motion.div>
        </div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-line"
        >
          <img
            src="/lovable-uploads/linkedin-pic.png"
            alt="Gaurav Godambe"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: `I have the pleasure of working closely with Gaurav during his tenure as the regional CFO at MSCI, where he demonstrated exceptional leadership and financial expertise. Gaurav's innovative approach to budget planning played a pivotal role in driving financial success across different product lines in the Asia Pacific region. His strong business acumen is evident in every aspect of his work, and he consistently delivers insightful and impactful dashboards that provide valuable sales insights and performance trends.`,
    author: "Jason Chan, CFA",
    position: "Fund and Corporate Service Solutions",
    company: "MSCI",
    avatarUrl: "/lovable-uploads/b4de7b70-5781-4c7b-adf9-dfbca5d9752e.png",
  },
  {
    quote: `I highly recommend my colleague Gaurav for his exceptional ability to identify insightful trends and address gaps through his expertise in creating effective dashboards. His analytical skills and strategic mindset significantly contribute to our team's success. A valuable asset for any multinational organisation.`,
    author: "Vivek Agarwalla, CFA",
    position: "Executive Director - Portfolio & Risk Management Analytics",
    company: "MSCI",
    avatarUrl: "/lovable-uploads/f61926d8-11b7-4f1e-a8d4-233df1e41e03.png",
  },
  {
    quote: `Highly professional and efficient. One of those who get things done.`,
    author: "Sean Kim",
    position: "APAC Lead of Index Structured Products",
    company: "MSCI",
    avatarUrl: "/lovable-uploads/cbf06246-48b1-48e2-a308-54922c95f8a4.png",
  },
];

function Testimonials() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <motion.p {...fadeUp} className="eyebrow mb-4">Testimonials</motion.p>
        <motion.h2
          {...fadeUp}
          className="mb-14 max-w-2xl font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
        >
          What colleagues say.
        </motion.h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="flex flex-col rounded-xl border border-line bg-ink p-7"
            >
              <blockquote className="text-sm leading-relaxed text-fog">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-line">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover border border-line"
                />
                <div>
                  <div className="text-sm font-medium text-bone">{t.author}</div>
                  <div className="font-mono text-[0.65rem] text-fog">{t.position} · {t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-24 text-center md:py-32">
        <motion.h2
          {...fadeUp}
          className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-bone md:text-4xl"
        >
          Have a finance or AI problem worth solving?
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
          className="mx-auto mt-5 max-w-md text-base text-fog"
        >
          Book a free 20-minute scoping call. I'll tell you honestly whether it's worth building.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <Link
            to={BOOKING_URL}
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Book a scoping call
          </Link>
          <a href={`mailto:${EMAIL}`} className="font-mono text-xs text-fog hover:text-bone">
            or email {EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}


export default function NewLanding() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Helmet>
        <title>Gaurav Godambe | AI Agent Development & AI Consulting Expert</title>
        <meta name="description" content="Gaurav Godambe - Finance leadership and AI builds, end-to-end. AI agents, AI consulting, AI strategy, financial analysis, budgeting, and forecasting." />
        <meta name="keywords" content="Gaurav, AI agent, AI consultant, AI strategy, financial analysis, budgeting, forecasting" />
      </Helmet>
      <Nav />
      <main>
        <Hero />
        <Edge />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <CTA />

      </main>
      <LandingFooter />
      <AudioPlayer />
    </div>
  );
}
