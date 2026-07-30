export default function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="w-full max-w-md text-center">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400"
          aria-hidden="true"
        />

        <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-cyan-300">
          Loading portfolio
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Preparing the requested content...
        </p>
      </div>
    </main>
  );
}
