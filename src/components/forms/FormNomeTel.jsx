import { useState, useContext } from "react";
import React from "react";
import { UsuarioContext } from "../../context/usuarioContext";
import "./Forms.css";

export const Form = () => {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [nascimento, setNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [renda, setRenda] = useState();
  const [cep, setCep] = useState();
  const [endereco1, setEndereco1] = useState();
  const [endereco2, setEndereco2] = useState();

  // const input = document.querySelectorAll('CONSO'+'[input]');
  // console.log(input)

  const [inputs, setInputs] = useState();

  const { UsuarioGlobal, setUsuarioGlobal } = useContext(UsuarioContext);

  function salvaUsuario(e) {
    const novoUsuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      nascimento: nascimento,
      cpf: cpf,
      renda: renda,
      cep: cep,
      endereco1: endereco1,
      endereco2: endereco2,
    };

    setUsuarioGlobal([...UsuarioGlobal, novoUsuario]);
    console.log(UsuarioGlobal);
  }

  return (
    <form id="form-geral">
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Sobrenome"
        onChange={(e) => setSobrenome(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Telefone"
        onChange={(e) => setTelefone(e.target.value)}
      ></input>
      <input
        type="date"
        placeholder="Nascimento"
        onChange={(e) => setNascimento(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Renda mensal"
        onChange={(e) => setRenda(e.target.value)}
      ></input>
      <input
        type="text"
        id="cep"
        placeholder="CEP"
        onChange={(e) => setCep(e.target.value)}
      ></input>
      <input
        type="text"
        className="endereco"
        placeholder="Endereço 1"
        onChange={(e) => setEndereco1(e.target.value)}
      ></input>
      <input
        type="text"
        className="endereco"
        placeholder="Endereço 2"
        onChange={(e) => setEndereco2(e.target.value)}
      ></input>

      <button type="button" onClick={(e) => salvaUsuario(e)}>
        BOTÃO AQUI
      </button>
    </form>
  );
};

export default Form;
