/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import FullRecipe from "../components/FullRecipe";

//TODO - REPLACE BELOW WITH CODE TO FETCH SPECIFIC RECIPE BASED ON ID

function RecipeView() {
	const [randomRecipes, setRandomRecipes] = useState([]);

	const fetchRandomRecipes = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?number=1&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);

			const result = await response.json();
			console.log("recipes by ingredients :>> ", result);
			setRandomRecipes(result.recipes);
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
			{randomRecipes &&
				randomRecipes.map((recipe, i) => {
					return <FullRecipe key={i} recipe={recipe} />;
				})}
		</>
	);
}

export default RecipeView;
