import type { PortfolioData } from "@/data/portfolio";

interface HeroSectionProps {
  data: PortfolioData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl scroll-mt-24 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28"
    >
      {/* Main introduction */}
      <div className="hero-reveal relative z-10">
        {/* Availability status */}
        <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 font-mono text-xs text-emerald-300 backdrop-blur">
          <span
            className="relative flex h-2.5 w-2.5 shrink-0"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span>{data.availability}</span>
        </div>

        {/* Professional specialty */}
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          {data.eyebrow}
        </p>

        {/* Primary portfolio message */}
        <h1
          id="hero-title"
          className="max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          {data.headline}
        </h1>

        {/* Personal introduction */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          I&apos;m{" "}
          <strong className="font-semibold text-slate-100">{data.name}</strong>,
          a <strong className="font-semibold text-cyan-300">{data.role}</strong>
          . {data.introduction}
        </p>

        {/* Technology list */}
        <ul
          aria-label="Primary technologies"
          className="mt-8 flex flex-wrap gap-3"
        >
          {data.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 font-mono text-xs text-slate-300 backdrop-blur"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* Primary actions */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View selected work
            <span
              className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          <a
            href={`mailto:${data.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/60 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-300 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start a conversation
          </a>
        </div>

        {/* Social links and location */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-slate-500">
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:text-cyan-300"
          >
            GitHub ↗
          </a>

          <a
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:text-cyan-300"
          >
            LinkedIn ↗
          </a>

          <span
            className="hidden h-4 w-px bg-slate-700 sm:block"
            aria-hidden="true"
          />

          <span>{data.location}</span>
        </div>
      </div>

      {/* Developer profile card */}
      <div className="hero-reveal hero-reveal-delay relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
        <div
          className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />

        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          {/* Editor header */}
          <header className="flex h-12 items-center justify-between border-b border-white/10 px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <span className="font-mono text-xs text-slate-500">
              developer.ts
            </span>
          </header>

          {/* TypeScript profile */}
          <div className="overflow-x-auto p-6 font-mono text-sm leading-7 sm:p-8">
            <p>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-cyan-300">developer</span>{" "}
              <span className="text-slate-500">=</span>{" "}
              <span className="text-amber-300">{"{"}</span>
            </p>

            <p className="pl-5">
              <span className="text-sky-300">name</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-emerald-300">&quot;{data.name}&quot;</span>,
            </p>

            <p className="pl-5">
              <span className="text-sky-300">role</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-emerald-300">&quot;{data.role}&quot;</span>,
            </p>

            <p className="pl-5">
              <span className="text-sky-300">focus</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-emerald-300">
                &quot;{data.profile.focus}&quot;
              </span>
              ,
            </p>

            <p className="pl-5">
              <span className="text-sky-300">stack</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-slate-300">[</span>
            </p>

            <div className="pl-10">
              {data.technologies.map((technology) => (
                <p key={technology}>
                  <span className="text-emerald-300">
                    &quot;{technology}&quot;
                  </span>
                  ,
                </p>
              ))}
            </div>

            <p className="pl-5 text-slate-300">],</p>

            <p className="pl-5">
              <span className="text-sky-300">principles</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-slate-300">[</span>
            </p>

            <div className="pl-10">
              {data.profile.principles.map((principle) => (
                <p key={principle}>
                  <span className="text-emerald-300">
                    &quot;{principle}&quot;
                  </span>
                  ,
                </p>
              ))}
            </div>

            <p className="pl-5 text-slate-300">],</p>

            <p className="pl-5">
              <span className="text-sky-300">available</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-orange-300">true</span>,
            </p>

            <p>
              <span className="text-amber-300">{"}"}</span>
              <span className="text-slate-500">;</span>
            </p>
          </div>

          {/* Editor footer */}
          <footer className="flex items-center justify-between border-t border-white/10 px-6 py-4 font-mono text-xs text-slate-500">
            <span>TypeScript</span>

            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />

              {data.profile.status}
            </span>
          </footer>
        </article>
      </div>

      {/* Professional strengths */}
      <div className="relative z-10 grid gap-4 lg:col-span-2 sm:grid-cols-3">
        {data.highlights.map((highlight) => (
          <article
            key={highlight.title}
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-950/70"
          >
            <h2 className="font-mono text-sm font-semibold text-cyan-300">
              {highlight.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {highlight.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
