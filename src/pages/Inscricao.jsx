import CardForm from "../components/components.inscricao/CardForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Input from "../components/components.inscricao/Input";
import Select from "../components/components.inscricao/Select";
import userImg from "../assets/user.png";
import Title from "../components/components.inscricao/Title";

// https://docs.google.com/forms/d/e/1FAIpQLSdrt0iVja0Tfxu_oxpDpXeAuenp9f_D6piMyE08Qon2HfFAoA/viewform

const Inscricao = () => {
  return (
    <div>
      <Header />
      <div>
        <>
          <Title />
        </>
        <CardForm
          imgPath={userImg}
          timelineTitle="Dados pessoais"
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
              <Input
                text="Escolaridade"
                placeholder="Digite seu nome completo"
                type="text"
              />
              <Select
                text="Escolaridade"
                data={[
                  "Selecione",
                  "Ensino Fundamental",
                  "Ensino Médio",
                  "Ensino Superior",
                  "Pós-Graduação",
                ]}
              />
            </>
          }
        />
        <CardForm
          timelineTitle="Contato"
          text="Contato"
          children1={
            <>
              <Input text="Telefone" placeholder="+55 (00) 0000-0000" />
            </>
          }
          children2={
            <>
              <Input text="E-mail" placeholder="Seu@gmail.com" type="email" />
            </>
          }
        />
        <CardForm
          timelineTitle="Diversidade e inclusão"
          text="Diversidade e inclusão"
          children1={
            <>
              <Input text="Telefone" placeholder="+55 (00) 0000-0000" />
            </>
          }
          children2={
            <>
              <Input
                text="Possui alguma alergia?"
                placeholder="Ex: amendoim, glutem, nenhuma...."
                type="text"
              />
            </>
          }
        />
        <CardForm
          timelineTitle="Situação familiar"
          text="Situação familiar"
          children1={
            <>
              <Select
                text="Faixa salarial familiar"
                data={[
                  "Selecione a faixa",
                  "Até 1 salário mínimo",
                  "De 1 a 2 salários mínimos",
                  "De 2 a 3 salários mínimos",
                  "De 3 a 5 salários mínimos",
                  "De 5 a 10 salários mínimos",
                  "Acima de 10 salários mínimos",
                ]}
              />
            </>
          }
          children2={
            <>
              <Select
                text="Quantas pessoas moram na sua casa?"
                data={[
                  "Selecione",
                  "1 pessoa",
                  "2 pessoas",
                  "3 pessoas",
                  "4 pessoas",
                  "5 pessoas",
                  "6 pessoas",
                  "7 pessoas ou mais",
                ]}
              />{" "}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Inscricao;
