import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
	images,
	triangle,
	square,
} from 'ionicons/icons';

import Tab1 from '../page-components/tab1';
import Tab2 from '../page-components/tab2';
import Tab3 from '../page-components/tab3';
import Settings from '../page-components/settings';

function Home() {
	useEffect(() => {
		console.log(`Home didMount`);

		return () => {
			console.log(`Home unMount`);
		};

	}, []);

	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					{/* An IonRouterOutlet should only contain Routes or Redirects. */}
					<IonRouterOutlet>
						<Route exact path='/tab1'>
							<Tab1 />
						</Route>

						<Route exact path='/tab2'>
							<Tab2 />
						</Route>

						<Route exact path='/tab3'>
							<Tab3 />
						</Route>

						<Route exact path='/settings'>
							<Settings />
						</Route>

						<Route exact path='/'>
							<Redirect to='/tab1' />
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
						<IonTabButton tab='tab1' href='/tab1'>
							<IonIcon aria-hidden='true' icon={triangle} />
							<IonLabel>Tab 1</IonLabel>
						</IonTabButton>

						<IonTabButton tab='tab2' href='/tab2'>
							<IonIcon aria-hidden='true' icon={images} />
							<IonLabel>Tab 2</IonLabel>
						</IonTabButton>

						<IonTabButton tab='tab3' href='/tab3'>
							<IonIcon aria-hidden='true' icon={square} />
							<IonLabel>Tab 3</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
}

export default Home;
