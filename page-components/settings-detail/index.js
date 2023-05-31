import { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
	StyledPassPropsContainer,
} from './styles';

const propTypes = {
	selectedId: PropTypes.number,
	selectedName: PropTypes.string,
};

const defaultProps = {
	selectedId: 0,
	selectedName: '',
};

function SettingsDetailPage({
	selectedId,
	selectedName,
}) {
	useEffect(() => {
		console.log('SettingsDetailPage didMount');

		return () => {
			console.log('SettingsDetailPage unMount');
		};

	}, []);

	return (
		<>
			<h1>SettingsDetailPage</h1>

			<StyledPassPropsContainer>
				{`selectedId = ${selectedId}`}
				<br />
				{`selectedName = ${selectedName}`}
			</StyledPassPropsContainer>

			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
		</>
	);
}

SettingsDetailPage.propTypes = propTypes;
SettingsDetailPage.defaultProps = defaultProps;

export default SettingsDetailPage;
