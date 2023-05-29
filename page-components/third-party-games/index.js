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

function ThirdPartyGamesPage() {
	useEffect(() => {
		console.log('ThirdPartyGamesPage didMount');

		return () => {
			console.log('ThirdPartyGamesPage unMount');
		};

	}, []);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('ThirdPartyGamesPage ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('ThirdPartyGamesPage ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('ThirdPartyGamesPage ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('ThirdPartyGamesPage ionViewDidLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton />
					</IonButtons>

					<IonTitle>Third Party Games</IonTitle>
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

export default ThirdPartyGamesPage;
