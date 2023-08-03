/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	// signOut,
} from "firebase/auth";

const defaultValue = {
	user: "No provider",
	login: () => {
		throw Error("No provider");
	},
	logout: () => {
		throw Error("No provider");
	},
	handleRegister: () => {
		throw Error("No provider");
	},
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null);

	// const logout = () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			setUser(null);
	// 		})
	// 		.catch((error) => {
	// 			// An error happened.
	// 			console.log(error);
	// 		});
	// };

	const login = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
				console.log(user, "userlogin");
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(error, "error");
				// const errorMessage = error.message;
			});
	};

	const register = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
				console.log(user, "new user");
			})
			.catch((error) => {
				// const errorCode = error.code;
				console.log(error, "error");
				// const errorMessage = error.message;
			});
	};

	return (
		<AuthContext.Provider value={{ user, login, register }}>
			{props.children}
		</AuthContext.Provider>
	);
};
