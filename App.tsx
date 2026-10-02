import { Navigate, Route, Routes } from "react-router-dom";
import Shell from "./Shell";
import Home from "../features/home/Home";
import Settings from "../features/settings/Settings";
import Placeholder from "../features/placeholder/Placeholder";
import { FEATURES } from "../features/home/features";

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        {FEATURES.map((f) => (
          <Route key={f.path} path={f.path} element={<Placeholder feature={f} />} />
        ))}
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
