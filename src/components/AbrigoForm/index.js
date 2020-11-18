import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap';

import api from '../../services/api';
import { login } from '../../services/auth';

import logotipoAzul from "../../imagens/logotipo-azul.svg"
import "./styles.css";

function AbrigoForm(props) {

  const [cnpj_cpf, setCnpj_cpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtd_animais, setQtd_animais] = useState();
  const [telefone, setTelefone] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function handleLocationAccess() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
      }, function(error){
        console.log(error);
      })
    }
  }

  async function handleCreateAbrigoUser(e) {
    e.preventDefault();
    const abrigoRole = 'abrigo';
    try {
      const response = await api.post("/users", {
        username: nome,
        email: email,
        password: senha,
        role: abrigoRole
      });
      if (response.status === 200) {
        alert("Sucesso ao cadastrar, lembre-se que para fazer login você precisará do seu email e senha!");
        login(response.data.token);
        props.history.push("/");
      } else {
        alert("Houve algum erro ao cadastrar seu abrigo :(");
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const novoAbrigo = {
        cnpj_cpf,
        nome,
        email,
        descricao,
        qtd_animais,
        telefone,
        rua,
        numero,
        cep,
        bairro,
        cidade,
        uf
      }
      const response = await api.post("/abrigos", novoAbrigo);
      if (response.status === 200) {
        handleCreateAbrigoUser(e);
      } else {
        alert("Houve algum erro ao cadastrar seu abrigo :(");
      }
    } catch (err) {
      console.log(err);
    };
    props.setModal();
  };

  return (
    <Form onSubmit={handleSubmitForm} className="abrigo-form">
      <img
        src={logotipoAzul}
        alt="Ha-bicho"
        width="175"
        height="150"
      />

      <Row>
        <Col>
          <FormGroup>
            <Label>CNPJ ou CPF do responsável</Label>
            <Input
              name="cnpj_cpf"
              value={cnpj_cpf}
              onChange={e => setCnpj_cpf(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Telefone</Label>
            <Input
              name="telefone"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Label>Nome do Abrigo</Label>
            <Input
              name="nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Senha para Login</Label>
            <Input
              name="senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              type="password"
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Label>Número de animais</Label>
            <Input
              name="qtd_animais"
              value={qtd_animais}
              onChange={e => setQtd_animais(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Descrição</Label>
            <Input
              name="descricao"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              type="textarea"
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <h4>Acesso à localização</h4>
      <Row className="location-access">
        <Col>
          <p style={{ fontWeight: "600" }}>
            Para podermos exibir seu abrigo no nosso mapa de abrigos,
            precisamos que você permita nosso acesso à sua localização.
          <br />
          <span style={{
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#333366"}}
          >
            Não se preocupe, a localização não será usada
            para nada além de mostrar o seu abrigo no mapa.
          </span>
          </p>
        </Col>
        <Col>
          <p>
            <h6 style={{ fontWeight: "bold" }}>
              Benefício de permitir o acesso
            </h6>
            <span style={{fontWeight: "600"}}>
              Os possíveis doadores que acessarem nosso site
              irão poder ver e acessar seu abrigo facilmente e mais rápido, aumentando
              as chances de doação! 
            </span>
            <Button className="btn-permitir" onClick={handleLocationAccess}>Permitir</Button>
          </p>
        </Col>
      </Row>

      <FormGroup className="endereco">
        <Label className="address-field">Endereço</Label>

        <Row>

          <Col>
            <FormGroup>
              <Label>Rua</Label>
              <Input
                name="rua"
                value={rua}
                onChange={e => setRua(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Número</Label>
              <Input
                name="numero"
                value={numero}
                onChange={e => setNumero(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>CEP</Label>
              <Input
                name="cep"
                value={cep}
                onChange={e => setCep(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

        </Row>

        <Row>

          <Col>
            <FormGroup>
              <Label>Bairro</Label>
              <Input
                name="bairro"
                value={bairro}
                onChange={e => setBairro(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Cidade</Label>
              <Input
                name="cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>UF</Label>
              <Input
                name="uf"
                value={uf}
                onChange={e => setUf(e.target.value)}
                required
              />
            </FormGroup>
          </Col>

        </Row>
      </FormGroup>

      <Button className="submit-button" type="submit">Cadastrar</Button>
    </Form>
  );
}

export default AbrigoForm;
