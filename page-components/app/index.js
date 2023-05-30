import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';
import withPage from '../../ljit-react-mobile-navigation/with-page';

import Tabs from '../tabs';

import pages from '../../navigation/pages';
import { NavigationKeyEnums } from '../../navigation';

const {
	TABS,
	LAYOUT_ROUTE,
} = NavigationKeyEnums;

function App() {
	function _renderRoutes() {
		return pages.map(page => {
			const {
				path,
			} = page;

			const WrapperPageComponent = withPage(page);

			return (
				<Route
					key={path}
					path={path}
				>
					<WrapperPageComponent />
				</Route>
			);
		});
	}

	return (
		<IonApp>
			<IonReactRouter>
				{/* An IonRouterOutlet should only contain Routes or Redirects. */}
				<IonRouterOutlet>
					{_renderRoutes()}

					<Route path={TABS}>
						<Tabs />
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
