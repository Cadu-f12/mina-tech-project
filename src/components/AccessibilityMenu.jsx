import { useEffect, useState } from "react";
import "./AccessibilityMenu.css";

const STORAGE_KEY = "mina-tech-accessibility";

function readPreferences() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function AccessibilityIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.25" /><path d="M4 8.5c4.7 1.4 11.3 1.4 16 0M12 8.8V14m0 0-4.2 6M12 14l4.2 6" /></svg>;
}

function MonochromeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5v17" /><path className="icon-fill" d="M12 3.5a8.5 8.5 0 0 1 0 17Z" /></svg>;
}

function PauseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="4.5" width="4" height="15" rx="1" /><rect x="13.5" y="4.5" width="4" height="15" rx="1" /></svg>;
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [monochrome, setMonochrome] = useState(() => Boolean(readPreferences().monochrome));
  const [animationsPaused, setAnimationsPaused] = useState(() => Boolean(readPreferences().animationsPaused));

  useEffect(() => {
    document.documentElement.classList.toggle("is-monochrome", monochrome);
    document.documentElement.classList.toggle("animations-paused", animationsPaused);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ monochrome, animationsPaused }));
    window.dispatchEvent(new CustomEvent("accessibility-animation-change", { detail: { paused: animationsPaused } }));
  }, [monochrome, animationsPaused]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <aside className={`accessibility-menu${isOpen ? " is-open" : ""}`}>
      <div id="accessibility-options" className="accessibility-options" aria-hidden={!isOpen}>
        <button type="button" className={`accessibility-option${monochrome ? " is-active" : ""}`} onClick={() => setMonochrome((value) => !value)} aria-pressed={monochrome} tabIndex={isOpen ? 0 : -1}>
          <span className="accessibility-option-icon"><MonochromeIcon /></span>
          <span>Site monocromático</span>
          <span className="accessibility-switch" aria-hidden="true" />
        </button>
        <button type="button" className={`accessibility-option${animationsPaused ? " is-active" : ""}`} onClick={() => setAnimationsPaused((value) => !value)} aria-pressed={animationsPaused} tabIndex={isOpen ? 0 : -1}>
          <span className="accessibility-option-icon"><PauseIcon /></span>
          <span>Parar animações</span>
          <span className="accessibility-switch" aria-hidden="true" />
        </button>
      </div>
      <button type="button" className="accessibility-trigger" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="accessibility-options" aria-label={`${isOpen ? "Fechar" : "Abrir"} opções de acessibilidade`}>
        <AccessibilityIcon /><span>Acessibilidade</span>
      </button>
    </aside>
  );
}
