import FullRecipe from "./FullRecipe";

/* eslint-disable react/prop-types */
function RandomRecipes({ recipe }) {
	console.log("props in random card", recipe);
	return (
		<div>
			<h3>{recipe.title}</h3>
			<img src={recipe.image} />
			<br></br>
			<button onClick={FullRecipe}>View full recipe</button>
		</div>
	);
}

export default RandomRecipes;
