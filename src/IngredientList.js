import React from 'react';
import PropTypes from 'prop-types';

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
		</ul>
	)
};

IngredientList.propTypes = {
	ingredients: PropTypes.array.isRequired
};

export default IngredientList;