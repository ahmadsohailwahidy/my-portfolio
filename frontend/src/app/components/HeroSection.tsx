import { portfolioData } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl scroll-mt-24 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28"
    >
      {/* Hero content */}
      <div className="hero-reveal relative z-10">
        {/* Availability */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 font-mono text-xs text-emerald-300 backdrop-blur">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          {portfolioData.availability}
        </div>

        <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          {portfolioData.greeting}
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          {portfolioData.name}
        </h1>

        <h2 className="mt-5 max-w-3xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl lg:text-4xl">
          {portfolioData.role}
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {portfolioData.introduction}
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
          >
            View Projects
            <span
              className="ml-3 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/60 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:text-cyan-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-sm text-slate-500">
          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-300"
          >
            GitHub ↗
          </a>

          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-300"
          >
            LinkedIn ↗
          </a>

          <span className="hidden h-4 w-px bg-slate-700 sm:block" />

          <span>{portfolioData.location}</span>
        </div>
      </div>

      {/* Developer profile card */}
      <div className="hero-reveal hero-reveal-delay relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
        <div
          className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />

        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          {/* Card header */}
          <header className="flex h-12 items-center justify-between border-b border-white/10 px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <span className="font-mono text-xs text-slate-500">
              developer.ts
            </span>
          </header>

          {/* Code content */}
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
              <span className="text-emerald-300">
                &quot;{portfolioData.name}&quot;
              </span>
              ,
            </p>

            <p className="pl-5">
              <span className="text-sky-300">role</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-emerald-300">
                &quot;{portfolioData.role}&quot;
              </span>
              ,
            </p>

            <p className="pl-5">
              <span className="text-sky-300">technologies</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-slate-300">[</span>
            </p>

            <div className="pl-10">
              {portfolioData.technologies.map((technology) => {
                return (
                  <p key={technology}>
                    <span className="text-emerald-300">
                      &quot;{technology}&quot;
                    </span>
                    ,
                  </p>
                );
              })}
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

          {/* Card footer */}
          <footer className="flex items-center justify-between border-t border-white/10 px-6 py-4 font-mono text-xs text-slate-500">
            <span>TypeScript</span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Ready
            </span>
          </footer>
        </article>
      </div>
    </section>
  );
}
