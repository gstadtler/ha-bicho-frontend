import React, { useState } from 'react';
import ReactModal from 'react-modal';

import AbrigoForm from '../AbrigoForm';

import { FiX } from "react-icons/fi";
import './styles.css';

function Modal() {
	const [showModal, setShowModal] = useState(false);

	function handleOpenModal() {
		setShowModal(!showModal);
	}

	function handleCloseModal() {
		setShowModal(!showModal);
	}

	return (
		<>
			<button className="bt-open-modal" onClick={handleOpenModal}>
				Cadastre seu Abrigo
			</button>
			<ReactModal
				isOpen={showModal}
				ariaHideApp={false}
				style={{
					content: {
						top: '40px',
						left: '200px',
						right: '200px',
						bottom: '40px'
					}
				}}
			>
				<button className="bt-close-modal" onClick={handleCloseModal}>
					<FiX />
				</button>
				<AbrigoForm setModal={handleCloseModal} />
			</ReactModal>
		</>
	);
}

export default Modal;