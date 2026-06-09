import  minasHome from '../assets/minasHome.png';
import './Home.css';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={minasHome} alt="Imagem de mulheres scientistas" className="banner-img" />
        <div className="banner-text">
            <p className="banner-subtitle">- Jornada Minatech . Florianópolis</p>
            <h1 className="banner-title">Tecnologia<br />feita <em>por meninas,<br />para meninas.</em></h1>
        </div>  
      </div>
      
      <section className="secao-150">
        <div className="secao-150-texto">
          <p className="mais-de">Mais de</p>
          <p className="meninas-impactadas"><span>150</span><br /> meninas impactadas na<br />grande Florianópolis!</p>
        </div>

        <div className="circulo-gratis-ex">
          <div className="circulo-gratis-in">
            <p>100%<br />GRATUITO</p>
          </div>
        </div>

        <div className="circulos-deco">
          <div className="circulo-deco c1"></div>
          <div className="circulo-deco c2"></div>
          <div className="circulo-deco c3"></div>
          <div className="circulo-deco c4"></div>
        </div>  
      </section>
    </div>
  );
};

export default Home;
