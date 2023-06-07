import React from 'react';
import PropTypes from 'prop-types';
import {
	IonButtons,
	IonBackButton,
} from '@ionic/react';

const propTypes = {
	hasBackButton: PropTypes.bool,
	data: PropTypes.array,
};

const defaultProps = {
	hasBackButton: true,
	data: [],
};

function LeftButtons({
	hasBackButton,
	data,
}) {
	return (
		<IonButtons slot='start'>
			{hasBackButton ? <IonBackButton /> : null}
			{data.map(button => button)}
		</IonButtons>
	);
}

LeftButtons.propTypes = propTypes;
LeftButtons.defaultProps = defaultProps;

export default LeftButtons;
