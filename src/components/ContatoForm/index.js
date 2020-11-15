import React from "react";
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

import "./styles.css";


function ContatoForm() {

	async function handleSubmit(e) {
	}

	return (
		<Form onSubmit={handleSubmit} className="formulario-contato">
			<FormGroup className="contato-form">
				<Label>Nome</Label>
				<Input name="nome" className="input-form" required/>
			</FormGroup>
			<FormGroup className="contato-form">
				<Label>Email</Label>
				<Input name="email" type="email" className="input-form" required />
			</FormGroup>
			<FormGroup className="contato-form">
				<Label>Texto</Label>
				<Input name="mensagem" type="textarea" className="input-form" required />
			</FormGroup>
			<FormGroup className="contato-form-btn">
				<Button className="send-button" type="submit">Enviar</Button>
			</FormGroup>
		</Form>
	);
}

export default ContatoForm;
