import React, { useState, useRef } from "react";
import { Form } from '@unform/web';
import Input from '../Input';
import {
  FormGroup, Label, Button,
  Row, Col
} from 'reactstrap';
import * as Yup from 'yup';
import api from '../../services/api';
import { login } from '../../services/auth';
import logotipoAzul from "../../imagens/logotipo-azul.svg"
import "./styles.css";


function AbrigoForm(props) {
  const formRef = useRef(null);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const role = 'abrigo';

  function handleLocationAccess() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      }, function (error) {
        console.log(error);
      })
    }
  };

  async function handleAbrigoUser(user) {
    try {
      const response = await api.post("/register", user);
      if (response.data.token) {
        alert("Sucesso ao cadastrar! Para fazer login você precisará do seu email e senha!");
        login(response.data.token);
      } else {
        alert("Houve algum erro ao cadastrar.");
      }
    } catch (error) {
      console.log(error);
    }
    props.setModal();
  };

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        cnpj_cpf: Yup
          .string()
          .test('len', 'CPF deve ter 11 caracteres, CNPJ deve ter 14 caracteres',
            (val) => {
              if (val) {
                if(val.length > 11){
                  return val.length === 14;
                } else {
                  return val.length === 11;
                }
              }
            }
          ),
        nome: Yup.string().min(3,'Nome deve ter no mínimo 3 caracteres').max(80,'Nome deve ter no máximo 80 caracteres'),
        email: Yup.string().email('Insira um e-mail válido!'),
        password: Yup.string().min(6,'Sua senha deve ter no mínimo 6 caracteres').max(30,'Sua senha deve ter no máximo 30 caracteres'),
        descricao: Yup.string().min(25,'Descrição deve ter no mínimo 25 caracteres').max(500,'Descrição deve ter no máximo 500 caracteres'),
        qtd_animais: Yup.number()
          .test('len', 'Você precisa abrigar no mínimo 5 animais para fazer parte da Ha-bicho!', (val) => {
            if (val) { return val >= 5; }
          }).integer().positive(),
        telefone: Yup.string().min(11,'Telefone deve ter no mínimo 11 caracteres').max(15,'Telefone deve ter no máximo 15 caracteres'),
        rua: Yup.string(),
        numero: Yup.number().integer().positive(),
        cep: Yup.string().min(8,'CEP deve ter no mínimo 8 caracteres').max(10,'CEP deve ter no máximo 10 caracteres'),
        bairro: Yup.string(),
        cidade: Yup.string(),
        uf: Yup.string().min(2,'UF deve ter 2 caracteres').max(2,'UF deve ter 2 caracteres')
      })

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const {
        cnpj_cpf, nome, email, password,
        descricao, qtd_animais, telefone,
        rua, numero, cep, bairro, cidade, uf } = data;

      const user = { username: nome, email, password, role };

      const novoAbrigo = {
        cnpj_cpf, nome, email,
        descricao, qtd_animais,
        telefone, rua, numero,
        cep, bairro, cidade,
        uf, latitude, longitude
      }
      const response = await api.post("/abrigos", novoAbrigo);
      if (response.data) {
        handleAbrigoUser(user);
      } else {
        alert('Houve algum erro ao cadastrar seu abrigo.');
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit} className="abrigo-form">
      <img
        src={logotipoAzul}
        alt="Ha-bicho"
        width="175"
        height="150"
      />

      <Row>
        <Col>
          <FormGroup>
            <Input
              name="cnpj_cpf"
              label="CNPJ ou CPF do responsável"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              name="telefone"
              label="Telefone"
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Input
              name="nome"
              label="Nome do Abrigo"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              name="email"
              label="Email"
              type="email"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              name="password"
              label="Senha para Login"
              type="password"
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Input
              name="qtd_animais"
              label="Número de animais"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              name="descricao"
              label="Descrição"
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
              color: "#333366"
            }}
            >
              Não se preocupe, a localização não será usada
              para nada além de mostrar o seu abrigo no mapa.
          </span>
          </p>
        </Col>
        <Col>
          <h6 style={{ fontWeight: "bold" }}>
            Benefício de permitir o acesso
          </h6>
          <p>
            <span style={{ fontWeight: "600" }}>
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
              <Input
                name="rua"
                label="Rua"
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Input
                name="numero"
                label="Número"
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Input
                name="cep"
                label="CEP"
                required
              />
            </FormGroup>
          </Col>

        </Row>

        <Row>

          <Col>
            <FormGroup>
              <Input
                name="bairro"
                label="Bairro"
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Input
                name="cidade"
                label="Cidade"
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Input
                name="uf"
                label="UF"
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
