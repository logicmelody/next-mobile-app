import React from 'react';
import PropTypes from 'prop-types';
import {
	IonButtons,
	IonButton,
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
		<IonButtons slot='start'>
			{hasBackButton ? <IonBackButton /> : null}
			{_renderButtons()}
		</IonButtons>
	);
}

LeftButtons.propTypes = propTypes;
LeftButtons.defaultProps = defaultProps;

export default LeftButtons;
