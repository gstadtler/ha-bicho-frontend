import React, { useState } from 'react';
import {
	Container,
	Modal,
	Button,
} from 'reactstrap';

import { FiX } from "react-icons/fi";
import './styles.css';

function ModalComponent(props) {
	const [showModal, setShowModal] = useState(false);

	function handleOpenModal() {
		setShowModal(!showModal);
	}

	function handleCloseModal() {
		setShowModal(!showModal);
	}

	function renderChildren(){
		const child = props.children;
		const cloned = React.cloneElement(child, { setModal: handleCloseModal });
		return cloned;
	};

	return (
		<Container className="modal-form p-0" fluid={true}>
			<Button 
				style={{background: `${props.btnColor}`}} 
				className="bt-open-modal" 
				onClick={handleOpenModal}
			>
				{props.btnOpenModalName}
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
				<div>
					{renderChildren()}
				</div>
			</Modal>
		</Container>
	);
}

export default ModalComponent;
