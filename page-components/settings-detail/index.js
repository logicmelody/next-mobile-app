import { useEffect } from 'react';

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonBackButton,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

function SettingsDetailPage() {
	useEffect(() => {
		console.log('SettingsDetailPage didMount');

		return () => {
			console.log('SettingsDetailPage unMount');
		};

	}, []);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('SettingsDetailPage ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('SettingsDetailPage ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('SettingsDetailPage ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('SettingsDetailPage ionViewDidLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton />
					</IonButtons>

					<IonTitle>SettingsDetail</IonTitle>
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

export default SettingsDetailPage;
