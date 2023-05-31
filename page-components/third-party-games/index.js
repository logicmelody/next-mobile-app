import { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	setOnNavigatorEvent: PropTypes.func.isRequired,
};

function ThirdPartyGamesPage({
	setOnNavigatorEvent,
}) {
	useEffect(() => {
		console.log('ThirdPartyGamesPage didMount');

		return () => {
			console.log('ThirdPartyGamesPage unMount');
		};

	}, []);

	useEffect(() => {
		setOnNavigatorEvent(_onNavigatorEvent);
	}, [setOnNavigatorEvent]);

	function _onNavigatorEvent(event) {
		switch (event) {
			case 'on-view-will-enter':
				console.log('ThirdPartyGamesPage on-view-will-enter');

				break;

			case 'on-view-did-enter':
				console.log('ThirdPartyGamesPage on-view-did-enter');

				break;

			case 'on-view-will-leave':
				console.log('ThirdPartyGamesPage on-view-will-leave');

				break;

			case 'on-view-did-leave':
				console.log('ThirdPartyGamesPage on-view-did-leave');

				break;

			default:
				break;
		}
	}

	return (
		<>
			<h1>ThirdPartyGamesPage</h1>
			<h1>Test top</h1>
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
			<h1>Test</h1>
		</>
	);
}

ThirdPartyGamesPage.propTypes = propTypes;

export default ThirdPartyGamesPage;
