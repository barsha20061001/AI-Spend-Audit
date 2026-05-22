import SpendForm from "@/components/form/SpendForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm text-emerald-300">
          Free AI Spend Audit
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Stop overpaying for AI tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Analyze your AI stack, uncover hidden overspending, and discover
          cheaper plans or alternatives in under 2 minutes.
        </p>

        <div className="mt-12 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <SpendForm />
        </div>
      </section>
    </main>
  );
}