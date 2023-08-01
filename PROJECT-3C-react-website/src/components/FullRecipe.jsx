/* eslint-disable react/prop-types */

function FullRecipe({ recipe }) {
	console.log("props in full recipe", recipe);
	return (
		<>
			<div>
				<h3>{recipe.title}</h3>
				<img src={recipe.image} />
				<p>Ready in: {recipe.readyInMinutes} minutes</p>
				<p>Serves: {recipe.servings}</p>
			</div>
			<button>Add to Favourites</button>
			<div>{recipe.summary}</div>
		</>
	);
}

export default FullRecipe;
