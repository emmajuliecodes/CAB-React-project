import {
	createBrowserRouter,
	NavLink,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Outlet,
} from "react-router-dom";

//NOTE - section above is for creating router

import "./App.css";
import About from "./views/About";
// import Test from "./Test";
import Home from "./views/Home";
import Cuisines from "./views/Cuisines";
import Login from "./views/Login";
import MyRecipes from "./views/MyRecipes";
import RecipeView from "./views/RecipeView";

import NoMatch from "./views/NoMatch";
import { AuthContextProvider } from "./context/AuthContext";

//NOTE - everything must be within the function anchor

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />} errorElement={<NoMatch />}>
				<Route index element={<Home />} />
				<Route path="About" element={<About />} />
				<Route path="Cuisines" element={<Cuisines />} />
				<Route path="MyRecipes" element={<MyRecipes />} />
				<Route path="Login" element={<Login />} />
				<Route path="RecipeView" element={<RecipeView />} />
			</Route>
		)
	);

	return (
		<>
			<AuthContextProvider>
				<h1>Recipes Website</h1>
				<RouterProvider router={router} />
			</AuthContextProvider>

			{/* <h1>Recipes Website</h1>
			<RouterProvider router={router} /> */}
		</>
	);
}

const Root = () => {
	return (
		<>
			<nav>
				<NavLink to="/">Home</NavLink> |
				<NavLink to="/Cuisines"> Cuisines</NavLink> |
				<NavLink to="/About"> About</NavLink> |
				<NavLink to="/MyRecipes"> My Recipes</NavLink> |
				<NavLink to="/MyRecipes"> Login</NavLink>
			</nav>

			<div>
				<Outlet />
			</div>
		</>
	);
};

// const [recipes, setRecipes] = useState([]);
// const [error, setError] = useState(null);

// 	// console.log('object :>> ', process.env.MY_SECRET); //? this notation would work with a react app created with the common npx create-react-app ...

// 	// console.log("env var with VIte:>> ", import.meta.env.VITE_MY_SECRET); //? the syntax to use an env variable in a React app created with VITE is import.meta.env.VITE_YOURENVNAME...
// 	const fetchAllRecipes = async () => {
// 		try {
// 			let result = await fetch(
// 				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
// 					import.meta.env.VITE_API_KEY
// 				}`
// 			);
// 			let json = await result.json();
// 			console.log("json :>> ", json);
// 			setRecipes(json.results);
// 			// console.log("data", data);
// 		} catch (error) {
// 			console.log("Hang on...", error.message);
// 			setError(error.message);
// 		} finally {
// 			console.log("test");
// 		}
// 	};

// useEffect(() => {
// 	fetchAllRecipes();
// }, []);

// return (
// 	<>
// 		{console.log("data in jsx>>>", recipes)}
// 		<div className="Home-header">
// 			<h1>Taste the world</h1>
// 			<p>Explore and find recipes based on cuisines and ingredients</p>
// 		</div>
// TODO - Display 10 x random recipes props here
// 		

export default App;
