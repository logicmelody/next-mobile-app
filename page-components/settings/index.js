import { useEffect } from 'react';

function SettingsPage() {
	useEffect(() => {
		console.log('SettingsPage didMount');

		return () => {
			console.log('SettingsPage unMount');
		};

	}, []);

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
