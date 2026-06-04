import CardForm from "../components/CardForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Input from "../components/Input";

// https://docs.google.com/forms/d/e/1FAIpQLSdrt0iVja0Tfxu_oxpDpXeAuenp9f_D6piMyE08Qon2HfFAoA/viewform

const Inscricao = () => {
  return (
    <div>
      <Header />
      <div>
        <CardForm
          text="Dados pessoais"
          children1={
            <>
              <Input
                text="Nome completo"
                placeholder="Digite seu nome completo"
              />
            </>
          }
          children2={
            <>
              <Input text="Idade" placeholder="Quantos anos você tem?" />
              <Input
                text="Escolaridade"
                placeholder="Digite seu nome completo"
                type="text"
              />
            </>
          }
        />
        {/* <CardForm
          text="Dados pessoais"
          children1={
            <>
              <Input
                text="Nome completo"
                placeholder="Digite seu nome completo"
              />
              <Input
                text="Nome completo"
                placeholder="Digite seu nome completo"
                type="text"
              />
            </>
          }
        /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Inscricao;
