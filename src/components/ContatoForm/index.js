import React from "react";
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

import "./styles.css";


function ContatoForm(props) {

	async function handleSubmit(data, { reset }) {
	}

	return (
		<Form onSubmit={handleSubmit}>
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
			
			<Button className="send-button" type="submit">Enviar</Button>
		</Form>
	);
}

export default ContatoForm;
