// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from "react";

function About() {
	const [randomRecipes, setRandomRecipes] = useState();

	const fetchRandomRecipes = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);

			const result = await response.json();

			console.log("recipes by ingredients :>> ", result);
			setRandomRecipes(result);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	console.log("random recipes", randomRecipes);
	useEffect(() => {
		fetchRandomRecipes();
	}, []);

	return (
		<>
			<h1>About!</h1>

			{randomRecipes &&
				randomRecipes.map((recipe, i) => {
					return <RandomRecipes key={i} recipe={recipe} />;
				})}
		</>
	);
}

export default About;
