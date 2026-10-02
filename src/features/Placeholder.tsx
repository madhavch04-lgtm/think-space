import type { Feature } from "../home/features";

export default function Placeholder({ feature }: { feature: Feature }) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-10 md:px-10 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl">{feature.title}</h1>
      <p className="mt-4 text-muted">{feature.blurb}</p>
      <p className="mt-8 rounded-xl border border-dashed border-line p-5 text-sm">
        This feature is not built yet. It is planned for a later stage. Nothing on this
        page works, and no data is saved from it.
      </p>
    </div>
  );
}
