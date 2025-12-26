import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaSuspensa from "../ListaSuspensa/index.js";
import Botao from "../Botao/index.js";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoMembroCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Membro!</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite primeiro e segundo nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe a URL da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.time}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao text="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
