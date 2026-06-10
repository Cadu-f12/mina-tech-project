import  minasHome from '../assets/minasHome.png';
import './Home.css';
import FaixaRolante from "../components/Home/FaixaRolante";
import CardPrograma from "../components/Home/CardPrograma";


const Home = () => {
  return (
    <div className='HomeWraper'>
      <div className="banner">
        <img src={minasHome} alt="Imagem de mulheres scientistas" className="banner-img" />
        <div className="banner-text">
            <p className="banner-subtitle">- Jornada Minatech . Florianópolis</p>
            <h1 className="banner-title">Tecnologia<br />feita <em>por meninas,<br />para meninas.</em></h1>
        </div>  
      </div>
      <div className="banner-card">
        <CardPrograma />
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
      <FaixaRolante items={["Inovação", "Tecnologia", "Ciência", "Diversidade", "Educação", "Empoderamento", "Futuro"]} />
      <section className="secao-quem-somos">
        <div className="quem-somos-texto">
          <h2 className="quem-somos-titulo">Quem somos</h2>
          <h3 className="quem-somos-subtitulo">Corali e Engenheiros sem Fronteiras — núcleo Florianópolis</h3>
          <hr className="quem-somos-divisor" />
          <p>A Corali e os Engenheiros sem Fronteiras (Florianópolis), se uniram para organizar a Jornada Minatech.</p>
          <p>Temos o sonho de inspirar meninas a conhecerem e seguirem carreiras tecnológicas, mostrando que elas têm capacidade e que essas profissões não são só para meninos.</p>
          <p>Para isso, promovemos oficinas de lógica, matemática e física, junto com talks sobre profissões, soft skills, empreendedorismo, diversidade e empoderamento feminino.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
