import PropTypes from 'prop-types';

import {
	IonButton,
} from '@ionic/react';

const propTypes = {
	onClick: PropTypes.func,
}

const defaultProps = {
	onClick: () => { },
};

function Add2Button({
	onClick,
}) {
	return (
		<IonButton
			key='add-2'
			onClick={onClick}
		>
			Add 2
		</IonButton>
	);
}

Add2Button.propTypes = propTypes;
Add2Button.defaultProps = defaultProps;

export default Add2Button;
