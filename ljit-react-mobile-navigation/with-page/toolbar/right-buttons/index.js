import React from 'react';
import PropTypes from 'prop-types';
import {
	IonButtons,
} from '@ionic/react';

const propTypes = {
	data: PropTypes.array,
};

const defaultProps = {
	data: [],
};

function RightButtons({
	data,
}) {
	return (
		<IonButtons slot='end'>
			{data.map(button => button)}
		</IonButtons>
	);
}

RightButtons.propTypes = propTypes;
RightButtons.defaultProps = defaultProps;

export default RightButtons;
