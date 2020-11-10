import React from "react";
import { Form } from "@unform/web";
import Input from "../Input";
import api from '../../services/api';
import "./styles.css";

function AbrigoForm(props) {

	async function handleSubmit(data, { reset }) {
	}

	return (
		<Form onSubmit={handleSubmit}>

			<Input name="nome" label="Nome" required />
			<Input name="email" label="Email" type="email" required />
			<Input name="mensagem" label="Mensagem" type="text" required />
			
			<button className="send-button" type="submit">Enviar</button>
		</Form>
	);
}

export default AbrigoForm;
