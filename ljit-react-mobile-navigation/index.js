import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';

import TabsApp from './tabs-app';
import withPage from './with-page';

function startApp({
	tabs,
	pages,
	rootRoute,
}) {
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

	function _renderTabsRoute() {
		if (tabs) {
			const {
				path,
				tabPages,
			} = tabs;

			return (
				<Route path={path}>
					<TabsApp
						tabs={tabPages}
					/>
				</Route>
			);
		}
	}

	return (
		<IonApp>
			<IonReactRouter>
				{/* An IonRouterOutlet should only contain Routes or Redirects. */}
				<IonRouterOutlet>
					{_renderRoutes()}
					{_renderTabsRoute()}

					<Route exact path='/'>
						<Redirect to={rootRoute} />
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

export {
	startApp,
};
