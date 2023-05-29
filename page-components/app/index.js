import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LayoutRoute from '../layout-route';
import Tabs from '../tabs';
import Login from '../login';
import ThirdPartyGames from '../third-party-games';
import Settings from '../settings';

function App() {
	return (
		<IonApp>
			<IonReactRouter>
				{/* An IonRouterOutlet should only contain Routes or Redirects. */}
				<IonRouterOutlet>
					<Route path='/layout-route'>
						<LayoutRoute />
					</Route>

					<Route path='/tabs'>
						<Tabs />
					</Route>

					<Route path='/login'>
						<Login />
					</Route>

					<Route path='/third-party-games'>
						<ThirdPartyGames />
					</Route>

					<Route path='/settings'>
						<Settings />
					</Route>

					<Route exact path='/'>
						<Redirect to='/layout-route' />
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
