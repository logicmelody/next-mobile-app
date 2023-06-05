import React from 'react';
import PropTypes from 'prop-types';
import {
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonBackButton,
} from '@ionic/react';

import RightButtons from './right-buttons';

const propTypes = {
	navigationTitle: PropTypes.string,
	title: PropTypes.string,
	hasBackButton: PropTypes.bool,
	toolbarButtons: PropTypes.object,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	toolbarButtons: {},
};

function Toolbar({
	navigationTitle,
	title,
	hasBackButton,
	toolbarButtons,
}) {
	const {
		leftButtons = [],
		rightButtons = [],
	} = toolbarButtons;

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

			<RightButtons
				data={rightButtons}
			/>
		</IonToolbar>
	);
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
