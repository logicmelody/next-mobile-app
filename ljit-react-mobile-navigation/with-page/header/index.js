import PropTypes from 'prop-types';
import {
	IonHeader,
} from '@ionic/react';

import Toolbar from './toolbar';

const propTypes = {
	navigationTitle: PropTypes.string,
	title: PropTypes.string,
	hasBackButton: PropTypes.bool,
	HeaderComponent: PropTypes.elementType,
	onClickTitle: PropTypes.func,
};

const defaultProps = {
	navigationTitle: '',
	title: '',
	hasBackButton: true,
	onClickTitle: () => {},
};

function Header({
	navigationTitle,
	title,
	hasBackButton,
	HeaderComponent,
	onClickTitle,
}) {
	function _renderContent() {
		if (HeaderComponent) {
			return (
				<HeaderComponent
					onClickTitle={onClickTitle}
				/>
			);
		}
	
		return (
			<Toolbar
				navigationTitle={navigationTitle}
				title={title}
				hasBackButton={hasBackButton}
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
