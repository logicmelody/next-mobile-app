import React from 'react';
import PropTypes from 'prop-types';
import {
	IonToolbar,
	IonTitle,
} from '@ionic/react';

import LeftButtons from './left-buttons';
import RightButtons from './right-buttons';

const propTypes = {
	title: PropTypes.string,
	titleComponent: PropTypes.element,
	hasBackButton: PropTypes.bool,
	leftToolbarButtons: PropTypes.array,
	rightToolbarButtons: PropTypes.array,
};

const defaultProps = {
	title: '',
	hasBackButton: true,
	leftToolbarButtons: [],
	rightToolbarButtons: [],
};

function Toolbar({
	title,
	titleComponent,
	hasBackButton,
	leftToolbarButtons,
	rightToolbarButtons,
}) {
	return (
		<IonToolbar mode='ios'>
			<LeftButtons
				hasBackButton={hasBackButton}
				data={leftToolbarButtons}
			/>

			<IonTitle>
				{titleComponent || title}
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
