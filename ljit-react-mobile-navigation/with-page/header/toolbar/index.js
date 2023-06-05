import React from 'react';
import PropTypes from 'prop-types';
import {
	IonToolbar,
	IonTitle,
} from '@ionic/react';

import LeftButtons from './left-buttons';
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

	return (
		<IonToolbar>
			<LeftButtons
				hasBackButton={hasBackButton}
				data={leftButtons}
			/>

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
