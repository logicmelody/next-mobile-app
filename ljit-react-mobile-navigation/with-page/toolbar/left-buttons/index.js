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
	onClickButton: PropTypes.func,
};

const defaultProps = {
	hasBackButton: true,
	data: [],
	onClickButton: () => {},
};

function LeftButtons({
	hasBackButton,
	data,
	onClickButton,
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
						onClickButton(id);
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
