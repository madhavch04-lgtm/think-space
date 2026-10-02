import { useEffect, useState } from "react";
import { db, SCHEMA_VERSION } from "../../db/db";

export default function Settings() {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const out: Record<string, number> = {};
        for (const t of db.tables) out[t.name] = await t.count();
        setCounts(out);
        setPersisted((await navigator.storage?.persisted?.()) ?? false);
      } catch (e) { setErr(String(e)); }
    })();
  }, []);

  async function requestPersist() {
    setPersisted((await navigator.storage?.persist?.()) ?? false);
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 md:px-10 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl">Settings</h1>
      <section className="mt-8">
        <h2 className="font-serif text-2xl">Where your data lives</h2>
        <p className="mt-2 text-sm text-muted">
          Think Space saves everything in this browser on this device. Your phone and your laptop
          do not share data automatically. Clearing browser data can erase it. To move or protect
          your work you will be able to export a JSON file or back up to Google Drive,
          which is optional. Neither is built yet.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-2xl">Storage check</h2>
        {err && <p className="mt-2 text-sm text-red-300">Could not open local storage: {err}</p>}
        <p className="mt-2 text-sm text-muted">Database version {SCHEMA_VERSION}. Records stored:</p>
        <ul className="mt-2 grid grid-cols-2 gap-x-6 text-sm">
          {counts && Object.entries(counts).map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-line py-1"><span>{k}</span><span>{v}</span></li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Protected from automatic clean-up: {persisted === null ? "checking" : persisted ? "yes" : "not yet"}.
        </p>
        {persisted === false && (
          <button onClick={requestPersist} className="mt-3 rounded-lg border border-line px-4 py-2 text-sm hover:border-accent">
            Ask browser to protect my data
          </button>
        )}
      </section>
    </div>
  );
}
