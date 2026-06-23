import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/db";

import CardForm from "../components/inscricao/CardForm";
import Input from "../components/inscricao/Input";
import Select from "../components/inscricao/Select";
import userImg from "../assets/user.png";
import contactImg from "../assets/Group 53.png";
import inclusaoImg from "../assets/Group 54.png";
import situacaoImg from "../assets/Group 55.png";
import digitalImg from "../assets/Group 56.png";

import Title from "../components/inscricao/Title";
import Button from "../components/inscricao/Button";
import Radio from "../components/inscricao/Radio";
import SubmitButton from "../components/inscricao/SubmitButton";
import { useState } from "react";
import "./Inscricao.css";

const Inscricao = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [neurodivergente, setNeurodivergente] = useState("");
  const [alergia, setAlergia] = useState("");
  const [faixaSalarial, setFaixaSalarial] = useState("");
  const [moradores, setMoradores] = useState("");

  const [computador, setComputador] = useState(false);
  const [qtdComputador, setQtdComputador] = useState("");
  const [celular, setCelular] = useState(false);
  const [qtdCelular, setQtdCelular] = useState("");
  const [nenhum, setNenhum] = useState(false);

  const handleSubmit = async () => {
    try {
      console.log("yesss");
      console.log({
        nome,
        idade,
        escolaridade,
        telefone,
        email,
        alergia,
        faixaSalarial,
        moradores,
        computador,
        qtdComputador,
        celular,
        qtdCelular,
        nenhum,
        nome,
        idade,
        escolaridade,
        telefone,
        email,
        neurodivergente,
        alergia,
        faixaSalarial,
        moradores,
        computador,
        qtdComputador,
        celular,
        qtdCelular,
        nenhum,
      });
      await addDoc(collection(db, "users"), {
        nome,
        escolaridade,
        telefone,
        email,
        alergia,
        faixaSalarial,
        moradores,
        computador,
        qtdComputador,
        celular,
        qtdCelular,
        nenhum,
        createdAt: new Date(),
      });

      alert("Inscrição enviada!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="inscricao-page">
      <div className="inscricao-container">
        <Title />
        <CardForm
          imgPath={userImg}
          timelineTitle="Dados pessoais"
          text="Dados pessoais"
          children1={
            <>
              <Input
                text="Nome completo"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={setNome}
              />
            </>
          }
          children2={
            <>
              <Input
                text="Idade"
                placeholder="Quantos anos você tem?"
                type="text"
                value={idade}
                onChange={setIdade}
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
                value={escolaridade}
                onChange={setEscolaridade}
              />
            </>
          }
        />
        <CardForm
          imgPath={contactImg}
          timelineTitle="Contato"
          text="Contato"
          children1={
            <>
              <Input
                text="Telefone"
                placeholder="+55 (00) 0000-0000"
                value={telefone}
                onChange={setTelefone}
              />
            </>
          }
          children2={
            <>
              <Input
                text="E-mail"
                placeholder="Seu@gmail.com"
                type="email"
                value={email}
                onChange={setEmail}
              />
            </>
          }
        />
        <CardForm
          imgPath={inclusaoImg}
          timelineTitle="Diversidade e inclusão"
          text="Diversidade e inclusão"
          children1={
            <>
              <Button
                text="Você é neurodivergente?"
                title="Sim"
                selected={neurodivergente === "Sim"}
                onChange={setNeurodivergente}
              />

              <Button
                title="Não"
                selected={neurodivergente === "Não"}
                onChange={setNeurodivergente}
              />

              <Button
                title="Não sei ao certo"
                selected={neurodivergente === "Não sei ao certo"}
                onChange={setNeurodivergente}
              />

              <Button
                title="Prefiro não dizer"
                selected={neurodivergente === "Prefiro não dizer"}
                onChange={setNeurodivergente}
              />
            </>
          }
          children2={
            <>
              <Input
                text="Possui alguma alergia?"
                placeholder="Ex: amendoim, glutem, nenhuma...."
                type="text"
                value={alergia}
                onChange={setAlergia}
              />
            </>
          }
        />
        <CardForm
          imgPath={situacaoImg}
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
                value={faixaSalarial}
                onChange={setFaixaSalarial}
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
                value={moradores}
                onChange={setMoradores}
              />
            </>
          }
        />
        <CardForm
          imgPath={digitalImg}
          timelineTitle="Acesso digital"
          text="Acesso digital  "
          children1={
            <>
              <Radio
                text="Computador / notebook"
                checked={computador}
                onChange={() => setComputador(!computador)}
              />

              <Select
                text=""
                data={["qts", "1-2", "3-4", "5-6", "7+"]}
                value={qtdComputador}
                onChange={setQtdComputador}
              />

              <Radio
                text="Celular"
                checked={celular}
                onChange={() => setCelular(!celular)}
              />

              <Select
                text=""
                data={["qts", "1-2", "3-4", "5-6", "7+"]}
                value={qtdCelular}
                onChange={setQtdCelular}
              />

              <Radio
                text="Nenhum dos acima"
                checked={nenhum}
                onChange={() => setNenhum(!nenhum)}
              />
            </>
          }
          children2={<></>}
        />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </section>
  );
};

export default Inscricao;
