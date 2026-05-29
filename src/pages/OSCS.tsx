import './OSCS.css';

// 1. IMPORTAR A IMAGEM NO TOPO
// Dê um nome para a variável (ex: fotoTatiana)
import fotoTatiana from "../assets/df32cf49bcd20ae8a0004471a60d785653d9e568.png";

export default function OSCS() {
    return (
        <div className="main-background">
            <div className="container">
                {/* Lado Esquerdo: Carrossel Simulado */}
                <div className="carousel-section">
                    <div className="carousel-track">
                        <div className="slide">
                            {/* Placeholder da imagem - ESTRUTURA AJUSTADA */}
                            <div className="image-placeholder">
                                {/* Removemos o <span>.
                                   Adicionamos a <img> diretamente.
                                   O 'src' usa a variável importada.
                                   O 'alt' é obrigatório para acessibilidade.
                                */}
                                <img 
                                    src={fotoTatiana} 
                                    alt="Foto de Tatiana Takimoto" 
                                    className="photo-img" // Adicionamos uma classe para o CSS
                                />
                            </div>

                            {/* Cards de sobreposição */}
                            <div className="overlay-cards">
                                <div className="card">
                                    <p className="card-name">Tatiana Takimoto</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">Fundadora e coordenadora geral</p>
                                </div>
                            </div>
                            
                            {/* Pontos de Navegação e Seta */}
                            <div className="slide-controls">
                                <button className="arrow-button">→</button>
                                <div className="pagination-dots">
                                    <span className="dot dot-active"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lado Direito: Texto */}
                <div className="text-section">
                    <h2 className="heading">Conheça a equipe</h2>
                    <p className="paragraph">
                        Somos uma equipe formada por 11 mulheres dedicadas a abrir caminhos para outras mulheres nos setores de tecnologia e engenharia. Nosso foco é acolher aquelas em situação de vulnerabilidade, oferecendo suporte, capacitação e as oportunidades necessárias para que ocupem seus espaços de direito e cresçam com excelência no mercado de trabalho.
                    </p>
                </div>
            </div>
        </div>
    );
}