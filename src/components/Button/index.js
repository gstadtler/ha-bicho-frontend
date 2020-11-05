import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Button(props) {
	return (
		<div className="bttn">
			<Link to={props.redireciona} className="link-nav" onClick={props.setModal}>
				<h4>{props.titulo}</h4>
			</Link>
		</div>
	);
}

export default Button;