import { useEffect } from 'react';

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

function SettingsPage() {
	useEffect(() => {
		console.log('SettingsPage didMount');

		return () => {
			console.log('SettingsPage unMount');
		};

	}, []);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('SettingsPage ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('SettingsPage ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('SettingsPage ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('SettingsPage ionViewDidLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<h1>Test top</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
				<h1>Test</h1>
			</IonContent>
		</IonPage>
	);
}

export default SettingsPage;
