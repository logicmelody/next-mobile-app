import PropTypes from 'prop-types';
import {
	IonHeader,
} from '@ionic/react';

import Toolbar from '../toolbar';

const propTypes = {
	title: PropTypes.string,
	titleComponent: PropTypes.element,
	headerComponent: PropTypes.element,
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

function Header({
	title,
	titleComponent,
	headerComponent,
	hasBackButton,
	leftToolbarButtons,
	rightToolbarButtons,
}) {
	function _renderContent() {
		if (headerComponent) {
			return headerComponent;
		}
	
		return (
			<Toolbar
				title={title}
				titleComponent={titleComponent}
				hasBackButton={hasBackButton}
				leftToolbarButtons={leftToolbarButtons}
				rightToolbarButtons={rightToolbarButtons}
			/>
		);
	}

	return (
		<IonHeader>
			{/* // NOTE: 如果放在 IonHeader 或是 IonFooter，位置會被固定，如果放在 IonContent 中，會跟著 page scoll */}
			{_renderContent()}
		</IonHeader>
	);
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
