import "./FormerStudentSection.css";

import exAluna1 from "../../../assets/ex-aluna1.png";
import exAluna2 from "../../../assets/ex-aluna2.png";

import FormerStudent from "./FormerStudent";

export default function FormerStudentSection() {
    return (
        <>
            <section className="former-student-section">
                <h2>Depoimentos de ex-alunas</h2>

                <FormerStudent
                    image={exAluna1}
                    title="Vitória da Rosa"
                    text="
                    Minha jornada no Minatech, em 2022 e 2023, foi uma grande fonte de inspiração e crescimento.
                    O programa me ajudou a descobrir caminhos na Engenharia e Tecnologia, contribuindo para minha formação em Engenharia de Software e para meu desenvolvimento profissional.
                    Sou muito grata ao Minatech pelas oportunidades e por incentivar mulheres a irem cada vez mais longe.
                    "
                />

                <FormerStudent
                    image={exAluna2}
                    title="Maria Eduarda"
                    text="
                    Participar do projeto entre 2020 e 2022 transformou minha visão de futuro e fortaleceu minha confiança na programação.
                    Hoje, cursando Ciência da Computação, reconheço o quanto essa experiência contribuiu para minha base acadêmica e profissional.
                    Sou grata por iniciativas como essa, que incentivam mais mulheres a conquistarem espaço e crescerem na tecnologia.
                    "
                    reverse
                />
            </section>
        </>
    );
}
