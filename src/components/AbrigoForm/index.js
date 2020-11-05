import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../Input";
import Logo from "../../imagens/logotipo.svg"
import "./styles.css";

function AbrigoForm(props) {

  function handleSubmit(data, { reset }) {
    reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img
        src={Logo}
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

      <Scope path="endereco">
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
      </Scope>

      <button className="submit-button" type="submit" onClick={props.setModal}>Cadastrar</button>
    </Form>
  );
}

export default AbrigoForm;
