function Card(recipe) {
	console.log("props in card", recipe);
	return (
		<div>
			<h3>{recipe.recipe}</h3>
			<h3>{recipe.recipeImage}</h3>
		</div>
	);
}

export default Card;
