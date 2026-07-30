import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-400">
          Error 404
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          The page you are looking for may have been removed, renamed, or never
          existed.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 font-mono text-sm font-bold uppercase tracking-wider text-slate-950 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
