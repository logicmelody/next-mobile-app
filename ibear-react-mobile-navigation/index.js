import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';

import TabsApp from './tabs-app';
import ToolbarButton from './toolbar-button';

import {
	registerPage,
	getPage,
} from './register';

/*
	PageObject = {
		// Require
		title, (page Toolbar 上要顯示的 title)
		component, (page 的 component)

		// Optional
		hasBackButton, (有沒有左上角的 back button)
	}
*/

/*
	TabObject = {
		// Require
		title, (page Toolbar 上要顯示的 title)
		component, (page 的 component)
		tabLabel, (對應的 tab label)

		// Optional
		hasBackButton, (有沒有左上角的 back button)
		tabIcon, (tab 要顯示 icon 的 component)
		selectedTabIcon, (tab 要顯示 icon 的 component)
	}
*/
function startApp({
	tabs,
	pages,
	rootRoute,
}) {
	function _renderRoutes() {
		return pages.map(page => {
			const _page = getPage(page);

			return (
				<Route
					key={page}
					path={page}
				>
					<_page.component />
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
	registerPage,
	ToolbarButton,
};
