/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Card({ recipe }) {
	console.log("props in card", recipe);
	return (
		<div>
			<h3>{recipe.title}</h3>
			<img src={recipe.image} />
		</div>
	);
}

export default Card;
