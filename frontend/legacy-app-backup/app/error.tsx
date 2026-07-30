"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6"
      role="alert"
    >
      <section className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.35em] text-red-400">
          Unexpected error
        </p>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
          The requested section could not be displayed. You can try loading it
          again or return to the home page.
        </p>

        {error.digest ? (
          <p className="mt-4 font-mono text-xs text-slate-600">
            Error reference: {error.digest}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-950 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/60 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:text-cyan-300"
          >
            Return home
          </a>
        </div>
      </section>
    </main>
  );
}
