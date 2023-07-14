import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	const fetchRecipes = async () => {
		try {
			let result = await fetch("https://api.spoonacular.com/recipes/apiKey=");
			let json = await result.json();
			setData(json.results);
			console.log("data", data);
		} catch (error) {
			console.log("Hang on...", error.message);
			setError(error.message);
		} finally {
			console.log("test");
		}
	};

	useEffect(() => {
		fetchRecipes();
	});

	// STILL NEED TO ADD ARRAY LOOP

	return (
		<>
			<h1>Testing time</h1>
			<p>Try fetch the api</p>
		</>
	);
}

export default App;
