import { useEffect } from 'react';

function ThirdPartyGamesPage() {
	useEffect(() => {
		console.log('ThirdPartyGamesPage didMount');

		return () => {
			console.log('ThirdPartyGamesPage unMount');
		};

	}, []);

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

export default ThirdPartyGamesPage;
