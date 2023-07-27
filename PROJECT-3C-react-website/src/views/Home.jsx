// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Card from "../components/Card";


// import { data } from "../const";

const Home = () => {
	const [recipes, setRecipes] = useState();

	const fetchRecipes = async () => {
		try {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=carrots,tomatoes&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);
			const result = await response.json();

			console.log("recipes by ingredients :>> ", result);
			setRecipes(result);
		} catch (error) {
			console.log("error :>> ", error);
		}
	};

	console.log("recipes", recipes);
	useEffect(() => {
		fetchRecipes();
	}, []);

	return (
		<>
			<h1>Home</h1>

			<form id="ingredientFilter">
				<p>Search for recipes based on your ingredients</p>
				<input
					type="text"
					id="search"
					name="search"
					// onkeyup="searchBar()"
					placeholder="Enter your ingredients..."></input>
			</form>

			{recipes &&
				recipes.map((recipe, i) => {
					// return <p key={i}>{recipe.title}</p>;
					return <Card key={i} recipe={recipe} />;
				})}
			{/* {recipes &&
				recipes.map((recipe, i) => {
					return <Card key={i} recipe={recipe.images} />;
				})} */}
		</>
	);
};

export default Home;
