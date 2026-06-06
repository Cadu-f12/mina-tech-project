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
            <h1 className="banner-title">Tecnologia feita <em>por meninas,<br />para meninas.</em></h1>
        </div>  
      </div>
    </div>
  );
};

export default Home;
