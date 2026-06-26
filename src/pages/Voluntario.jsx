import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../db/db";

import CardForm from "../components/voluntario/CardForm";
import Input from "../components/voluntario/Input";
import Select from "../components/voluntario/Select";
import Textarea from "../components/voluntario/Textarea";
import SuccessModal from "../components/voluntario/SuccessModal";
import ErrorModal from "../components/voluntario/ErrorModal";

import userImg from "../assets/user.png";
import contactImg from "../assets/Group 53.png";
import inclusaoImg from "../assets/Group 54.png";
import curriculoImg from "../assets/Group 56.png";

import Title from "../components/voluntario/Title";
import SubmitButton from "../components/voluntario/SubmitButton";
import { useState } from "react";

const InscricaoVoluntaria = () => {
  // Dados pessoais
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [diploma, setDiploma] = useState("");
  const [cursoSuperior, setCursoSuperior] = useState("");

  // Contato
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // Perfil
  const [perfil, setPerfil] = useState("");
  const [curriculo, setCurriculo] = useState(null);

  // UI
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const escolaridadeOptions = [
    "Selecione",
    "Ensino Fundamental",
    "Ensino Médio",
    "Ensino Superior (em curso)",
    "Ensino Superior (concluído)",
    "Pós-Graduação",
    "Mestrado",
    "Doutorado",
  ];

  const generoOptions = [
    "Selecione",
    "Homem cis",
    "Homem trans",
    "Mulher cis",
    "Mulher trans",
    "Não-binário",
    "Outro",
    "Prefiro não dizer",
  ];

  const temDiploma =
    escolaridade === "Ensino Superior (concluído)" ||
    escolaridade === "Pós-Graduação" ||
    escolaridade === "Mestrado" ||
    escolaridade === "Doutorado";

  const cursandoSuperior = escolaridade === "Ensino Superior (em curso)";

  const handleIdadeChange = (val) => {
    // Impede valores negativos
    if (val === "" || Number(val) >= 0) {
      setIdade(val);
    }
  };

  const validate = () => {
    const newErrors = {};
    const missing = [];

    if (!nome.trim()) {
      newErrors.nome = "Por favor, preencha este campo.";
      missing.push("Nome completo");
    }
    if (!genero || genero === "Selecione") {
      newErrors.genero = "Por favor, selecione uma opção.";
      missing.push("Gênero");
    }
    if (!idade.trim() || Number(idade) <= 0) {
      newErrors.idade = "Por favor, informe uma idade válida.";
      missing.push("Idade");
    }
    if (!escolaridade || escolaridade === "Selecione") {
      newErrors.escolaridade = "Por favor, selecione uma opção.";
      missing.push("Escolaridade");
    }
    if (temDiploma && !diploma.trim()) {
      newErrors.diploma = "Por favor, preencha este campo.";
      missing.push("Curso do diploma");
    }
    if (cursandoSuperior && !cursoSuperior.trim()) {
      newErrors.cursoSuperior = "Por favor, preencha este campo.";
      missing.push("Curso em andamento");
    }
    if (!telefone.trim()) {
      newErrors.telefone = "Por favor, preencha este campo.";
      missing.push("Telefone");
    }
    if (!email.trim()) {
      newErrors.email = "Por favor, preencha este campo.";
      missing.push("E-mail");
    }
    if (!perfil.trim() && !curriculo) {
      newErrors.perfil = "Por favor, preencha este campo ou envie um currículo.";
      newErrors.curriculo = "Por favor, envie um currículo ou preencha o campo acima.";
      missing.push("Apresentação / Habilidades ou Currículo");
    } else if (!perfil.trim()) {
      newErrors.perfil = "Por favor, preencha este campo.";
      missing.push("Apresentação e habilidades");
    }

    setErrors(newErrors);
    setErrorList(missing);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      setShowErrorModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    try {
      let curriculoURL = null;

      if (curriculo) {
        const storage = getStorage();
        const storageRef = ref(storage, `curriculos/${Date.now()}_${curriculo.name}`);
        await uploadBytes(storageRef, curriculo);
        curriculoURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "voluntarios"), {
        nome,
        genero,
        idade,
        escolaridade,
        diploma: temDiploma ? diploma : null,
        cursoSuperior: cursandoSuperior ? cursoSuperior : null,
        telefone,
        email,
        apresentacao: perfil,
        habilidades: perfil,
        curriculoURL,
        createdAt: new Date(),
      });

      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar inscrição. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Title />

        {/* DADOS PESSOAIS */}
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
                error={errors.nome}
              />
              <Select
                text="Gênero"
                data={generoOptions}
                value={genero}
                onChange={setGenero}
                error={errors.genero}
              />
            </>
          }
          children2={
            <>
              <Input
                text="Idade"
                placeholder="Quantos anos você tem?"
                type="number"
                min="0"
                value={idade}
                onChange={handleIdadeChange}
                error={errors.idade}
              />
              <Select
                text="Escolaridade"
                data={escolaridadeOptions}
                value={escolaridade}
                onChange={setEscolaridade}
                error={errors.escolaridade}
              />
            </>
          }
        />

        {/* FORMAÇÃO — condicional */}
        {(temDiploma || cursandoSuperior) && (
          <CardForm
            imgPath={inclusaoImg}
            timelineTitle="Formação"
            text="Formação"
            children1={
              <>
                {temDiploma && (
                  <Input
                    text="Qual curso do seu diploma?"
                    placeholder="Ex: Administração, Pedagogia, Design..."
                    value={diploma}
                    onChange={setDiploma}
                    error={errors.diploma}
                  />
                )}
                {cursandoSuperior && (
                  <Input
                    text="Qual curso você está cursando?"
                    placeholder="Ex: Análise e Desenvolvimento de Sistemas..."
                    value={cursoSuperior}
                    onChange={setCursoSuperior}
                    error={errors.cursoSuperior}
                  />
                )}
              </>
            }
            children2={<></>}
          />
        )}

        {/* CONTATO */}
        <CardForm
          imgPath={contactImg}
          timelineTitle="Contato"
          text="Contato"
          children1={
            <>
              <Input
                text="Telefone"
                placeholder="+55 (00) 0 0000-0000"
                value={telefone}
                onChange={setTelefone}
                error={errors.telefone}
              />
            </>
          }
          children2={
            <>
              <Input
                text="E-mail"
                placeholder="seu@email.com"
                type="email"
                value={email}
                onChange={setEmail}
                error={errors.email}
              />
            </>
          }
        />

        {/* PERFIL */}
        <CardForm
          imgPath={curriculoImg}
          timelineTitle="Seu perfil"
          text="Seu perfil"
          children1={
            <>
              <Textarea
                text="Apresentação e habilidades"
                placeholder="Fale sobre você: quem é, o que te motiva e por que quer ser voluntário(a) no Mina Tech. Inclua também experiências, conhecimentos ou habilidades que acredita serem úteis — como educação, tecnologia, comunicação, gestão, design, entre outros."
                value={perfil}
                onChange={setPerfil}
                error={errors.perfil}
                hint="Preencha este campo ou envie um currículo — ao menos um é obrigatório."
                rows={8}
              />
            </>
          }
          children2={<></>}
        />

        {/* CURRÍCULO */}
        <CardForm
          imgPath={curriculoImg}
          timelineTitle="Currículo"
          text="Currículo (opcional)"
          children1={
            <>
              <div className="upload-wrapper">
                <p className="upload-hint">
                  Envie seu currículo em PDF. Se preferir, você pode apenas preencher o campo de habilidades acima — ao menos um dos dois é obrigatório.
                </p>
                <label className="upload-label">
                  <input
                    type="file"
                    accept=".pdf"
                    className="upload-input"
                    onChange={(e) => setCurriculo(e.target.files[0])}
                  />
                  {curriculo ? (
                    <span className="upload-name">📄 {curriculo.name}</span>
                  ) : (
                    <span className="upload-placeholder">Clique para selecionar um PDF</span>
                  )}
                </label>
                {errors.curriculo && (
                  <span className="error-msg">{errors.curriculo}</span>
                )}
              </div>
            </>
          }
          children2={<></>}
        />

        <SubmitButton onClick={handleSubmit} disabled={loading} />
      </div>

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      {showErrorModal && (
        <ErrorModal
          fields={errorList}
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </div>
  );
};

export default InscricaoVoluntaria;
