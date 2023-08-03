import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

function LoginComponent() {
	const { register, login } = useContext(AuthContext);

	const [registerEmail, setregisterEmail] = useState("");
	const [registerPassword, setregisterPassword] = useState("");

	const [loginEmail, setloginEmail] = useState("");
	const [loginPassword, setloginPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		register(registerEmail, registerPassword);
		login(loginEmail, loginPassword);
	};

	return (
		<div>
			<h3>Login</h3>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<br></br>
				<input
					type="email"
					value={loginEmail}
					onChange={(e) => {
						setloginEmail(e.target.value);
					}}
				/>
				<br></br>

				<label>Password </label>
				<br></br>
				<input
					type="password"
					value={loginPassword}
					onChange={(e) => {
						setloginPassword(e.target.value);
					}}
				/>

				<br></br>

				<button type="submit">Submit</button>
			</form>

			<h3>Register</h3>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<br></br>
				<input
					type="email"
					value={registerEmail}
					onChange={(e) => {
						setregisterEmail(e.target.value);
					}}
				/>
				<br></br>

				<label>Password </label>
				<br></br>
				<input
					type="password"
					value={registerPassword}
					onChange={(e) => {
						setregisterPassword(e.target.value);
					}}
				/>
				<br></br>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default LoginComponent;
