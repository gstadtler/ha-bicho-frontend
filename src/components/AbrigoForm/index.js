import React from "react";
import { Form } from "@unform/web";
import Input from "../Input";
import api from '../../services/api';
import logotipo from "../../imagens/logotipo.svg"
import "./styles.css";

function AbrigoForm(props) {

  async function handleSubmit(data, { reset }) {
    try {
      const novoAbrigo = data;
      const response = await api.post("/abrigos", novoAbrigo);
      console.log(response);
      if (response.status === 200) {
        alert("Abrigo cadastrado com sucesso!");
      } else {
        alert("Houve algum erro ao cadastrar seu abrigo :(");
      }
    } catch (err) {
      console.log(err);
    };
    reset();
    props.setModal();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img
        src={logotipo}
        height="150"
        width="175"
        alt="Ha-bicho"
      />

      <Input name="cnpj_cpf" label="CNPJ ou CPF do responsável" required/>
      <Input name="nome" label="Nome do Abrigo" required />
      <Input name="email" label="Email" type="email" />
      <Input name="descricao" label="Descrição" type="text" required />
      <Input name="qtd_animais" label="Número de animais" required />
      <Input name="telefone" label="Telefone" required />

      <div className="endereco">
        <label className="address-field">Endereço</label>
        <header>
          <Input name="rua" label="Rua" required />
          <Input name="numero" label="Número" required />
          <Input name="cep" label="CEP" required />
        </header>
        <footer>
          <Input name="bairro" label="Bairro" required />
          <Input name="cidade" label="Cidade" required />
          <Input name="uf" label="UF" required />
        </footer>
      </div>

      <button className="submit-button" type="submit">Cadastrar</button>
    </Form>
  );
}

export default AbrigoForm;
