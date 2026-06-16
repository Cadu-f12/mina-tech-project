import './QuemSomos.css';
import suaImagem from '../../assets/Equipe.png';

const QuemSomos = () => {
  return (
    <section className="secao-quem-somos">
      <img src={suaImagem} alt="Foto da equipe" className="quem-somos-img" />
      <div className="quem-somos-texto">
        <h2 className="quem-somos-titulo">Quem somos</h2>
        <h3 className="quem-somos-subtitulo">Corali e Engenheiros sem Fronteiras — núcleo Florianópolis</h3>
        <hr className="quem-somos-divisor" />
        <p>A Corali e os Engenheiros sem Fronteiras (Florianópolis), se uniram para organizar a Jornada Minatech.</p>
        <p>Temos o sonho de inspirar meninas a conhecerem e seguirem carreiras tecnológicas, mostrando que elas têm capacidade e que essas profissões não são só para meninos.</p>
        <p>Para isso, promovemos oficinas de lógica, matemática e física, junto com talks sobre profissões, soft skills, empreendedorismo, diversidade e empoderamento feminino.</p>
      </div>
    </section>
  );
};

export default QuemSomos;