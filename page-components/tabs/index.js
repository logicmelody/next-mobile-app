import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonButton,
	useIonRouter,
} from '@ionic/react';
import {
	triangle,
	square,
} from 'ionicons/icons';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

import { NavigationKeyEnums } from '../../navigation';

const {
	TAB1,
	TAB2,
	TAB3,
} = NavigationKeyEnums;

function Tabs() {
	const router = useIonRouter();

	const pathname = router.routeInfo.pathname;

	useEffect(() => {
		console.log(`Tabs didMount`);

		return () => {
			console.log(`Tabs unMount`);
		};

	}, []);

	return (
		<IonTabs>
			{/* An IonRouterOutlet should only contain Routes or Redirects. */}
			<IonRouterOutlet>
				<Route exact path={TAB1}>
					<Tab1 />
				</Route>

				<Route exact path={TAB2}>
					<Tab2 />
				</Route>

				<Route exact path={TAB3}>
					<Tab3 />
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

			<IonTabBar slot='bottom'>
				<IonTabButton tab='tab1' href={TAB1}>
					<IonIcon aria-hidden='true' icon={triangle} />
					<IonLabel>
						Tab 1 {TAB1 === pathname ? 'Selected' : ''}
					</IonLabel>
				</IonTabButton>

				<IonTabButton tab='tab2' href={TAB2}>
					<IonButton>
						Tab 2 {TAB2 === pathname ? 'Selected' : ''}
					</IonButton>
				</IonTabButton>

				<IonTabButton tab='tab3' href={TAB3}>
					<IonIcon aria-hidden='true' icon={square} />
					<IonLabel>
						Tab 3 {TAB3 === pathname ? 'Selected' : ''}
					</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
}

export default Tabs;
