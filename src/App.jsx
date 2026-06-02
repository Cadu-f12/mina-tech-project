import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import OSCS from "./pages/OSCS";
import Inscricao from "./pages/Inscricao";
import Programacao from "./pages/Programacao";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/oscs" element={<OSCS />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
