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
import { ellipse, triangle } from 'ionicons/icons';

import Tab1 from '../page-components/tab1';
import Tab2 from '../page-components/tab2';
import Tab3 from '../page-components/tab3';

function Home() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
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

						<Route exact path='/'>
							<Redirect to='/tab1' />
						</Route>
					</IonRouterOutlet>

					<IonTabBar slot='bottom'>
						<IonTabButton tab='tab1' href='/tab1'>
							<IonIcon aria-hidden='true' icon={triangle} />
							<IonLabel>Tab 1</IonLabel>
						</IonTabButton>

						<IonTabButton tab='tab2' href='/tab2'>
							<IonIcon aria-hidden='true' icon={ellipse} />
							<IonLabel>Tab 2</IonLabel>
						</IonTabButton>

						<IonTabButton tab='tab3' href='/tab3'>
							<IonIcon aria-hidden='true' icon={ellipse} />
							<IonLabel>Tab 3</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
}

export default Home;
