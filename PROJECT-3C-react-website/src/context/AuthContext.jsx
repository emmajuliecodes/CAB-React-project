import { createContext, useState } from "react";

const defaultValue = {
	user: "No provider",
	login: () => {
		throw Error("No provider");
	},
	logout: () => {
		throw Error("No provider");
	},
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(false);

	const login = () => {
		setUser(true);
	};

	const logout = () => {
		setUser(false);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	);
};

// import { createContext, useState } from "react";

// const defaultValue =
//     console.log(defaultValue, "default value");

// export const AuthContext = createContext(defaultValue);

// export const AuthContextProvider = (props) => {
// 	const [user, setUser] = useState("default");
// 	return (
// 		<AuthContext.provider value={user}>{props.children}</AuthContext.provider>
// 	);
// };

// const user = useContext(AuthContext);

// const login = () => {
// 	setUser(true);
// };
