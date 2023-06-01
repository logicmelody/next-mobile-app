import React from 'react';
import PropTypes from 'prop-types';
import {
	IonToolbar,
	IonTitle,
	IonButtons,
	IonBackButton,
} from '@ionic/react';

const propTypes = {
	navigationTitle: PropTypes.string,
	title: PropTypes.string,
	hasBackButton: PropTypes.bool,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
};

function Toolbar({
	navigationTitle,
	title,
	hasBackButton,
}) {
	function _renderBackButton() {
		if (hasBackButton) {
			return (
				<IonButtons slot='start'>
					<IonBackButton />
				</IonButtons>
			);
		}
	}

	return (
		<IonToolbar>
			{_renderBackButton()}

			<IonTitle>
				{navigationTitle || title}
			</IonTitle>
		</IonToolbar>
	);
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
