/* eslint-disable react/prop-types */
function CuisineSearch({ recipe }) {
	console.log("cuisine recipe", recipe);
	return (
		<div>
			<h3>{recipe.title}</h3>
			<img src={recipe.image} />
		</div>
	);
}

export default CuisineSearch;
