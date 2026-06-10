import './CardPrograma.css';
import { Link } from 'react-router';

const CardPrograma = () => {
  return (
    <div className="card-programa p-4 shadow">
      <p className="card-programa-texto">
        Um programa gratuito que inspira jovens meninas de escolas públicas a explorar
        engenharia e tecnologia, porque o futuro também é delas!
      </p>
      <div className="d-flex row gap-4 mb-3">
        <Link to="/inscricao" className="btn btn-danger col-4 ms-3 me-4">Participar</Link>
        <Link to="/apoio" className="btn btn-danger col-4 ms-4">Apoie o projeto</Link>
      </div>
      <span className="card-programa-marca">Minatech</span>
    </div>
  );
};

export default CardPrograma;