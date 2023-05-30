import { useEffect } from 'react';

function SettingsPage({
	setOnNavigatorEvent,
}) {
	useEffect(() => {
		console.log('SettingsPage didMount');

		return () => {
			console.log('SettingsPage unMount');
		};

	}, []);

	useEffect(() => {
		setOnNavigatorEvent(_onNavigatorEvent);
	}, [setOnNavigatorEvent]);

	function _onNavigatorEvent(event) {
		switch (event) {
			case 'on-view-will-enter':
				console.log('SettingsPage on-view-will-enter');

				break;

			case 'on-view-did-enter':
				console.log('SettingsPage on-view-did-enter');

				break;

			case 'on-view-will-leave':
				console.log('SettingsPage on-view-will-leave');

				break;

			case 'on-view-did-leave':
				console.log('SettingsPage on-view-did-leave');

				break;

			default:
				break;
		}
	}

	return (
		<>
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

export default SettingsPage;
