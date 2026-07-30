export default function HomePage() {
  return (
    <main className="relative min-h-dvh">
      <section className="flex min-h-dvh items-center justify-center px-6">
        <div className="max-w-xl text-center" data-grid-ignore>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/70">
            Portfolio Background
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
            Interactive Grid
          </h1>

          <p className="mx-auto mt-5 max-w-lg leading-8 text-slate-400">
            Move your pointer across the grid and click on empty cells to play
            Tic-Tac-Toe.
          </p>
        </div>
      </section>
    </main>
  );
}
