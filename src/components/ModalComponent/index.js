import React, { useState } from 'react';
import {
	Container,
	Modal,
	Button,
} from 'reactstrap';

import AbrigoForm from '../AbrigoForm';

import { FiX } from "react-icons/fi";
import './styles.css';

function ModalComponent() {
	const [showModal, setShowModal] = useState(false);

	function handleOpenModal() {
		setShowModal(!showModal);
	}

	function handleCloseModal() {
		setShowModal(!showModal);
	}

	return (
		<Container className="modal-form p-0" fluid={true}>
			<Button className="bt-open-modal" onClick={handleOpenModal}>
				Cadastre seu Abrigo
			</Button>
			<Modal 
				isOpen={showModal} 
				backdrop={true} 
				keyboard={true}
				className="modal-lg modal-component"
			>
				<Button className="bt-close-modal" onClick={handleCloseModal}>
					<FiX />
				</Button>
				<AbrigoForm setModal={handleCloseModal} />
			</Modal>
		</Container>
	);
}

export default ModalComponent;
