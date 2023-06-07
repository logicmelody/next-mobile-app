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
	rightToolbarButtons: PropTypes.array,
	onClickButton: PropTypes.func,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	toolbarButtons: {},
	rightToolbarButtons: [],
	onClickButton: () => {},
};

function Toolbar({
	navigationTitle,
	title,
	hasBackButton,
	toolbarButtons,
	rightToolbarButtons,
	onClickButton,
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
				onClickButton={onClickButton}
			/>

			<IonTitle>
				{navigationTitle || title}
			</IonTitle>

			<RightButtons
				data={rightToolbarButtons}
				onClickButton={onClickButton}
			/>
		</IonToolbar>
	);
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
