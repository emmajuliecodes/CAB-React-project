import React, { useEffect } from "react";

function Test() {
	const fetchRecipes = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=carrots,tomatoes&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);
			const result = await response.json();
			console.log("recipes by ingredients :>> ", result);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	useEffect(() => {
		fetchRecipes();
	}, []);

	// return <div>{/* <h1>Fetching recipes by ingredients</h1> */}</div>;
}

export default Test;
