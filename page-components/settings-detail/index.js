import { useEffect } from 'react';

function SettingsDetailPage() {
	useEffect(() => {
		console.log('SettingsDetailPage didMount');

		return () => {
			console.log('SettingsDetailPage unMount');
		};

	}, []);

	return (
		<>
			<h1>SettingsDetailPage</h1>
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

export default SettingsDetailPage;
