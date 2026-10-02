import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/common/BackgroundVideo";
import { FEATURES } from "./features";

export default function Home() {
  return (
    <div className="relative min-h-[100%]">
      <BackgroundVideo />
      <div className="relative mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-24">
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Think. Organize. Understand.</h1>
        <p className="mt-5 max-w-xl text-muted">
          Turn study material into maps, notes and flashcards. Everything runs in your browser using
          fixed rules, with no AI, and your data stays on this device.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14">
          {FEATURES.map((f) => (
            <li key={f.path}>
              <Link
                to={`/${f.path}`}
                className="block h-full rounded-xl border border-line bg-surface/70 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent active:scale-[0.98] active:border-accent"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-2xl">{f.title}</h2>
                  <span className="shrink-0 text-xs text-muted">{f.status}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{f.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted">Each card opens a placeholder page until its feature is built.</p>
      </div>
    </div>
  );
}
