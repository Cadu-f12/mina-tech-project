import { useEffect } from "react";
import Lenis from "lenis";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import OSCS from "./pages/OSCS";
import Inscricao from "./pages/Inscricao";
import Programacao from "./pages/Programacao";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Layout from "./components/Layout";

function App() {
  useEffect(() => { // Função para inicializar o Lenis e configurar a animação de rolagem suave para todas as páginas do aplicativo
    const lenis = new Lenis();

    function updateAnimationPreference(event) {
      const paused = event?.detail?.paused ??
        document.documentElement.classList.contains("animations-paused");

      if (paused) lenis.stop();
      else lenis.start();
    }

    updateAnimationPreference();
    window.addEventListener(
      "accessibility-animation-change",
      updateAnimationPreference,
    );

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener(
        "accessibility-animation-change",
        updateAnimationPreference,
      );
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/oscs" element={<OSCS />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
