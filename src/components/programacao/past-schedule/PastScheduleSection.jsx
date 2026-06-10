import "./PastScheduleSection.css"

import foto1 from "../../../assets/pesquisadoras.png";
import foto2 from "../../../assets/mulher-hardware.png";

import PastSchedule from "./PastSchedule";

// image, text, reverse

export default function PastScheduleSection() {
    return (
        <>
            <section className="past-schedule-section">
                <h2>Programações Passadas</h2>
                <PastSchedule
                    image={foto1}
                    text="
                    Nossa imersão no Laboratório de Química do IFSC, conduzida pelas professoras Berenice e Gisele, foi uma vitrine sobre a versatilidade da Engenharia Química. 
                    Além de explorarmos as áreas de atuação e as crescentes oportunidades do mercado, vivenciamos a prática da transformação e o descarte correto de efluentes. 
                    "
                />
                <PastSchedule
                    image={foto2}
                    text="
                    Com a participação especial do Time Curie, do Senai, e da professora Daniela Suzuki, acompanhada por suas alunas graduandas e doutorandas da UFSC, 
                    vivenciamos uma troca de experiências. 
                    As atividades mostraram compartilhamento de trajetórias reais e conhecimentos técnicos avançados nas áreas de engenharia e tecnologia. 
                    "
                    reverse
                />
            </section>
        </>
    );
} 