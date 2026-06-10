import './FaixaRolante.css';

const FaixaRolante = ({ items }) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="faixa-rolante">
      <div className="faixa-trilha">
        {repeated.map((item, i) => (
          <span key={i} className="faixa-item">
            {item} <span className="faixa-ponto">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FaixaRolante;