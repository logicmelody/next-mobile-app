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
	leftToolbarButtons: PropTypes.array,
	rightToolbarButtons: PropTypes.array,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	leftToolbarButtons: [],
	rightToolbarButtons: [],
};

function Toolbar({
	navigationTitle,
	title,
	hasBackButton,
	leftToolbarButtons,
	rightToolbarButtons,
}) {
	return (
		<IonToolbar>
			<LeftButtons
				hasBackButton={hasBackButton}
				data={leftToolbarButtons}
			/>

			<IonTitle>
				{navigationTitle || title}
			</IonTitle>

			<RightButtons
				data={rightToolbarButtons}
			/>
		</IonToolbar>
	);
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
