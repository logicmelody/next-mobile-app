import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	useIonRouter,
} from '@ionic/react';
import {
	triangle,
} from 'ionicons/icons';

import { getPage } from '../register';

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

	function _renderTabs() {
		return tabs.map(tab => {
			const page = getPage(tab);

			const {
				tabLebal,
			} = page;

			return (
				<IonTabButton
					key={tab}
					tab={tab}
					href={tab}
				>
					<IonIcon aria-hidden='true' icon={triangle} />
					<IonLabel>
						{`${tabLebal} ${tab === pathname ? 'Selected' : ''}`}
					</IonLabel>
				</IonTabButton>
			);
		});
	}

	return (
		<IonTabs>
			<IonRouterOutlet>
				{_renderRoutes()}
			</IonRouterOutlet>

			<IonTabBar
				slot='bottom'
				mode='ios'
			>
				{_renderTabs()}
			</IonTabBar>
		</IonTabs>
	);
}

export default TabsApp;
