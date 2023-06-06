import PropTypes from 'prop-types';
import {
	IonHeader,
} from '@ionic/react';

import Toolbar from '../toolbar';

const propTypes = {
	navigationTitle: PropTypes.string,
	title: PropTypes.string,
	hasBackButton: PropTypes.bool,
	toolbarButtons: PropTypes.object,
	HeaderComponent: PropTypes.element,
	onClickTitle: PropTypes.func,
	onClickButton: PropTypes.func,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	toolbarButtons: {},
	onClickTitle: () => {},
	onClickButton: () => {},
};

function Header({
	navigationTitle,
	title,
	hasBackButton,
	toolbarButtons,
	HeaderComponent,
	onClickTitle,
	onClickButton,
}) {
	function _renderContent() {
		if (HeaderComponent) {
			return HeaderComponent;
		}
	
		return (
			<Toolbar
				navigationTitle={navigationTitle}
				title={title}
				hasBackButton={hasBackButton}
				toolbarButtons={toolbarButtons}
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
