import { useEffect } from 'react';

function LoginPage() {
	useEffect(() => {
		console.log('LoginPage didMount');

		return () => {
			console.log('LoginPage unMount');
		};

	}, []);

	return (
		<>
			<h1>Login</h1>
		</>
	);
}

export default LoginPage;
