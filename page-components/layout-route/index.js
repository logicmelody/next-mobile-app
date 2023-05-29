import { useEffect } from 'react';
import {
	useIonRouter,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

import { NavigationKeyEnums } from '../../navigation';

const {
	TAB1,
} = NavigationKeyEnums;

function LayoutRoute() {
	const router = useIonRouter();

	useEffect(() => {
		console.log('LayoutRoute didMount');

		setTimeout(() => {
			router.push(TAB1, 'none', 'replace');

		}, 3000);

		return () => {
			console.log('LayoutRoute unMount');
		};

	}, [router]);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('LayoutRoute ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('LayoutRoute ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('LayoutRoute ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('LayoutRoute ionViewDidLeave event fired');
	});

	return null;
}

export default LayoutRoute;
