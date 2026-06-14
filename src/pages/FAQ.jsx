import Accordion from "../components/FAQ/Accordion";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";
import Title from "../components/FAQ/Title";
const FAQ = () => {
  return (
    <>
      <Title title="Perguntas mais frequentes" />
      <Accordion
        Title="É possível ganhar um certificado?"
        content="Sim, haverá certificado ao final da Jornada Minatech.  Quem tiver mais de 75% de presença ganhará o certificado da participação na Jornada Minatech e concorrerá a sorteio de brindes e premiações."
        imgOpen={arrowUp}
        imgClose={arrowDown}
      />
      <Accordion
        Title="Onde será a jornada Minatech?"
        content="A nossa base será na Neoway, Itacorubi, Florianópolis. Outras atividades envolvem visitas aos laboratórios e empresas de tecnologia."
        imgOpen={arrowUp}
        imgClose={arrowDown}
      />
      <Accordion
        Title="Precisa da autorização de responsáveis?"
        content="Sim, as que são menores de idade precisam entregar a autorização da pessoa responsável. Para isso enviaremos um termo de responsabilidade que deverá ser assinado pela pessoa responsável."
        imgOpen={arrowUp}
        imgClose={arrowDown}
      />
      <Accordion
        Title="Como os horários e a organização do dia vão ser informados?"
        content="Todas as participantes serão incluídas em um grupo de whatsapp. Por ali passaremos todas as informações e tiraremos todas as dúvidas. "
        imgOpen={arrowUp}
        imgClose={arrowDown}
      />
    </>
  );
};

export default FAQ;
