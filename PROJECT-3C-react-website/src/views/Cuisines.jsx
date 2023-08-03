// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CuisineSearch from "../components/CuisineSearch";

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

			console.log("recipes by cuisine :>> ", result);
			setCuisineSearch(result.results);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	console.log("cuisinesearch", cuisineSearch);

	//NOTE - FETCHING LIST OF CUISINES

	const [cuisineList, setCuisineList] = useState([]);

	const fetchCuisineList = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/cuisine&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);
			const result = await response.json();

			console.log("cuisine list :>> ", result);

			setCuisineList(result.recipes.cuisine);
			console.log("cuisinelist", cuisineList);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	useEffect(() => {
		fetchComplexRecipe();
		fetchCuisineList();
	}, []);

	return (
		<>
			<div>
				<h1>Cuisines!</h1>
				<p>
					Find recipes from certain areas and taste the flavours of the world.
				</p>
			</div>
			<div>
				{cuisineSearch &&
					cuisineSearch.map((recipe, i) => {
						return <CuisineSearch key={i} recipe={recipe} />;
					})}
			</div>
			<div>
				<h3>Learn more about different cuisines.</h3>
			</div>
		</>
	);
};

export default Cuisines;
