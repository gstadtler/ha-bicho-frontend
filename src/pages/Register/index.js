import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './styles.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function Register() {

	//const [login, setLogin] = useState(false);
	//const [data, setData] = useState({});
	//const [picture, setPicture] = useState('');

	const responseFacebook = (response) => {
		console.log(response);
		//setData(response);
		//setPicture(response.picture.data.url);
		//if (response.accessToken) {
		//setLogin(true);
		//} else {
		//setLogin(false);
		//}
	}

	const responseGoogle = (response) => {
		console.log(response);
	}

	return (
		<>
			<Navbar />
			<div id="Register">
				<div className="login-fb">
					<FacebookLogin
						appId="398864984824000"
						fields="name,email,picture"
						scope="public_profile,user_friends"
						callback={responseFacebook}
					/>
				</div>
				<div className="login-google">
					<GoogleLogin
						clientId="969966321777-hj4ej23le0r0gs8ga68k2l2516q88mqh.apps.googleusercontent.com"
						buttonText="LOGIN WITH GOOGLE"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
					/>
				</div>

			</div>
		</>
	);
}

export default Register;