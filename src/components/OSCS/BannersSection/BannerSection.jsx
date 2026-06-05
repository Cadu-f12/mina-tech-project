import coraliImage from "../../../assets/corali.png"
import esnImage from "../../../assets/esn.png"
import "./BannerSection.css"

import Banner from "./Banner"

export default function BannerSection() {

    return (
        <>
            <section className="banner-section">
                <Banner 
                    reverse
                    text={"A Corali é uma OSC dedicada a transformar a realidade de mulheres em situação de vulnerabilidade, promovendo sua inclusão no ecossistema de tecnologia e inovação. "} 
                    image={coraliImage} 
                />
                <Banner 
                    text={"A Engenheiros Sem Fronteiras (Núcleo Florianópolis) é uma OSC que utiliza o conhecimento técnico da engenharia para promover transformações sociais e ambientais. "} 
                    image={esnImage} 
                />
            </section>
        </>
    )
}