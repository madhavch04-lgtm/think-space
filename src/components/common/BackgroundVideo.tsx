import { useEffect, useState } from "react";
import { HOME_VIDEO_URL } from "../../config/media";

const QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches);
  useEffect(() => {
    const m = window.matchMedia(QUERY);
    const f = () => setReduced(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return reduced;
}

// The gradient fallback is always drawn underneath. The video only fades in
// once it has loaded, so a slow, blocked or broken video never leaves a blank
// screen. With reduced motion on, the video is not loaded at all.
export default function BackgroundVideo() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const showVideo = HOME_VIDEO_URL !== "" && !reduced && !failed;

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="hero-fallback absolute inset-0" />
      {showVideo && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          src={HOME_VIDEO_URL}
          autoPlay muted loop playsInline preload="auto"
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
      <div className="hero-scrim absolute inset-0" />
    </div>
  );
}
