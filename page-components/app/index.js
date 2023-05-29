import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Tabs from '../tabs';
import Settings from '../settings';
import ThirdPartyGames from '../third-party-games';

function App() {
	useEffect(() => {
		console.log(`App didMount`);

		return () => {
			console.log(`App unMount`);
		};

	}, []);

	return (
		<IonApp>
			<IonReactRouter>
				{/* An IonRouterOutlet should only contain Routes or Redirects. */}
				<IonRouterOutlet>
					<Route path='/tabs'>
						<Tabs />
					</Route>

					<Route path='/settings'>
						<Settings />
					</Route>

					<Route path='/third-party-games'>
						<ThirdPartyGames />
					</Route>

					<Route exact path='/'>
						<Redirect to='/tabs/tab1' />
					</Route>

					{/* A common routing use case is to provide a "fallback" route to be rendered in the event the location navigated to does not match any of the routes defined. */}
					{/* <Route
							render={() => <Redirect to='/tab1' />}
						/> */}

					{/* <Route
							exact
							path="/dashboard"
							render={(props) => {
								return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
							}}
						/> */}
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
