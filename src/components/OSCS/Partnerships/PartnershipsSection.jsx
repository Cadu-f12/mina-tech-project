import "./PartnershipsSection.css";

import Sponsor from "./Sponsor";

import creaSc from "../../../assets/crea_sc.png";
import beDiverse from "../../../assets/be_diverse.png";
import hogar from "../../../assets/hogar.png";
import meSalva from "../../../assets/me_salva.png";
import morroDoSilicio from "../../../assets/morro_silicio.png";
import neoway from "../../../assets/neoway.png";

const firstRowSponsors = [
    {
        image: creaSc,
        alt: "CREA-SC",
        url: "https://portal.crea-sc.org.br/"
    },
    {
        image: neoway,
        alt: "Neoway",
        url: "https://www.neoway.com.br/"
    }
];

const secondRowSponsors = [
    {
        image: hogar,
        alt: "Hogar Empreendimentos",
        url: "https://www.hogarempreendimentos.com.br/"
    },
    {
        image: beDiverse,
        alt: "Be.Diverse",
        url: "https://www.bediverse.com.br/"
    },
    {
        image: morroDoSilicio,
        alt: "Morro do Silício",
        url: "https://morrodosilicio.com/"
    },
    {
        image: meSalva,
        alt: "Me Salva!",
        url: "https://www.mesalva.com/"
    }
];

export default function PartnershipsSection() {
    return (
        <section className="partnerships-section">

            <div className="partnerships-divider"></div>

            <h1 className="partnerships-title">
                Parcerias
            </h1>

            <p className="partnerships-subtitle">
                Empresas e instituições que apoiam o projeto
            </p>

            <div className="partnerships-logos">

                <div className="partnerships-row">
                    {firstRowSponsors.map((sponsor) => (
                        <Sponsor
                            key={sponsor.alt}
                            image={sponsor.image}
                            alt={sponsor.alt}
                            url={sponsor.url}
                        />
                    ))}
                </div>

                <div className="partnerships-row">
                    {secondRowSponsors.map((sponsor) => (
                        <Sponsor
                            key={sponsor.alt}
                            image={sponsor.image}
                            alt={sponsor.alt}
                            url={sponsor.url}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}