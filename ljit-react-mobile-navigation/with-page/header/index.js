import PropTypes from 'prop-types';
import {
	IonHeader,
} from '@ionic/react';

import Toolbar from '../toolbar';

const propTypes = {
	navigationTitle: PropTypes.string,
	title: PropTypes.string,
	hasBackButton: PropTypes.bool,
	leftToolbarButtons: PropTypes.array,
	rightToolbarButtons: PropTypes.array,
	headerComponent: PropTypes.element,
	onClickTitle: PropTypes.func,
	onClickButton: PropTypes.func,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	leftToolbarButtons: [],
	rightToolbarButtons: [],
	onClickTitle: () => {},
	onClickButton: () => {},
};

function Header({
	navigationTitle,
	title,
	hasBackButton,
	leftToolbarButtons,
	rightToolbarButtons,
	headerComponent,
	onClickTitle,
	onClickButton,
}) {
	function _renderContent() {
		if (headerComponent) {
			return headerComponent;
		}
	
		return (
			<Toolbar
				navigationTitle={navigationTitle}
				title={title}
				hasBackButton={hasBackButton}
				leftToolbarButtons={leftToolbarButtons}
				rightToolbarButtons={rightToolbarButtons}
				onClickButton={onClickButton}
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
