import React from 'react';
import PropTypes from 'prop-types';
import {
	IonButtons,
	IonButton,
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
	function _renderButtons() {
		return data.map(button => {
			const {
				id,
				component,
			} = button;

			return (
				<IonButton
					key={id}
					onClick={() => {
						console.log(`Click ${id}`);
					}}
				>
					{component}
				</IonButton>
			);
		});
	}

	return (
		<IonButtons slot='end'>
			{_renderButtons()}
		</IonButtons>
	);
}

RightButtons.propTypes = propTypes;
RightButtons.defaultProps = defaultProps;

export default RightButtons;
