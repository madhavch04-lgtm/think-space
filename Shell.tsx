import { NavLink, Outlet } from "react-router-dom";
import { Home, Network, FileText, Layers, Clock, LayoutGrid, Settings } from "lucide-react";
import LogoSlot from "../components/common/LogoSlot";

const NAV = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/study-map", label: "Study Map", icon: FileText },
  { to: "/mind-canvas", label: "Canvas", icon: Network },
  { to: "/revision", label: "Revision", icon: Layers },
  { to: "/flashcards", label: "Cards", icon: Layers },
  { to: "/recent", label: "Recent", icon: Clock },
  { to: "/boards", label: "Boards", icon: LayoutGrid },
  { to: "/settings", label: "Settings", icon: Settings },
];
const cls = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-surface text-accent" : "text-muted hover:text-ink"}`;

export default function Shell() {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-line p-4 md:flex">
        <div className="mb-6 flex items-center gap-3 px-1">
          <LogoSlot />
          <div>
            <div className="font-serif text-2xl leading-none">Think Space</div>
            <div className="mt-1 text-xs text-muted">by Madhav</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Main">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={cls}><Icon size={18} />{label}</NavLink>
          ))}
        </nav>
      </aside>
      <header className="flex items-center gap-3 border-b border-line px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:hidden">
        <LogoSlot size={32} />
        <span className="font-serif text-xl">Think Space</span>
      </header>
      <main className="min-h-0 flex-1 overflow-y-auto"><Outlet /></main>
      <nav aria-label="Main" className="flex overflow-x-auto border-t border-line bg-bg pb-[env(safe-area-inset-bottom)] md:hidden">
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}
            className={({ isActive }) => `flex min-w-[4.5rem] flex-1 flex-col items-center gap-1 py-2 text-[11px] ${isActive ? "text-accent" : "text-muted"}`}>
            <Icon size={20} />{label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
