import { useEffect } from 'react';
import { Route } from 'react-router-dom';
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

import { NavigationKeyEnums } from '../../navigation';

import { getPage } from '../register';

const {
	TAB1,
	TAB2,
	TAB3,
} = NavigationKeyEnums;

function TabsApp({
	tabs,
}) {
	const router = useIonRouter();

	const pathname = router.routeInfo.pathname;

	useEffect(() => {
		console.log(`TabsApp didMount`);

		return () => {
			console.log(`TabsApp unMount`);
		};

	}, []);

	function _renderRoutes() {
		return tabs.map(tab => {
			const page = getPage(tab);

			return (
				<Route
					key={tab}
					exact
					path={tab}
				>
					<page.component />
				</Route>
			);
		});
	}

	return (
		<IonTabs>
			<IonRouterOutlet>
				{_renderRoutes()}
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

export default TabsApp;
