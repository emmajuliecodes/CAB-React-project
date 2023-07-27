// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Cuisines = () => {
	const [cuisineSearch, setCuisineSearch] = useState();

	const fetchComplexRecipe = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&number=10&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);
			const result = await response.json();

			console.log("recipes by ingredients :>> ", result);
			setCuisineSearch(result);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	console.log("cuisinesearch", cuisineSearch);
	useEffect(() => {
		fetchComplexRecipe();
	}, []);

	return (
		<div>
			<h1>Cuisines!</h1>
		</div>
	);
};

export default Cuisines;
