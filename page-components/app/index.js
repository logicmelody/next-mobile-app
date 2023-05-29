import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';

import LayoutRoute from '../layout-route';
import Tabs from '../tabs';
import Login from '../login';
import ThirdPartyGames from '../third-party-games';
import Settings from '../settings';

import { NavigationKeyEnums } from '../../navigation';

const {
	LAYOUT_ROUTE,
	LOGIN,
	SETTINGS,
	TABS,
	THIRD_PARTY_GAMES,
} = NavigationKeyEnums;

function App() {
	return (
		<IonApp>
			<IonReactRouter>
				{/* An IonRouterOutlet should only contain Routes or Redirects. */}
				<IonRouterOutlet>
					<Route path={LAYOUT_ROUTE}>
						<LayoutRoute />
					</Route>

					<Route path={TABS}>
						<Tabs />
					</Route>

					<Route path={LOGIN}>
						<Login />
					</Route>

					<Route path={THIRD_PARTY_GAMES}>
						<ThirdPartyGames />
					</Route>

					<Route path={SETTINGS}>
						<Settings />
					</Route>

					<Route exact path='/'>
						<Redirect to={LAYOUT_ROUTE} />
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
