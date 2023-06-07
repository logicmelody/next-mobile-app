import PropTypes from 'prop-types';
import {
	IonButton,
} from '@ionic/react';

const propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func,
};

const defaultProps = {
	onClick: () => {},
};

function ToolbarButton({
	children,
	onClick,
}) {
	return (
		<IonButton onClick={onClick}>
			{children}
		</IonButton>
	);
}

ToolbarButton.propTypes = propTypes;
ToolbarButton.defaultProps = defaultProps;

export default ToolbarButton;
