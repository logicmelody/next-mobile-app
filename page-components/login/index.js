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

function LoginPage() {
	useEffect(() => {
		console.log('LoginPage didMount');

		return () => {
			console.log('LoginPage unMount');
		};

	}, []);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('LoginPage ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('LoginPage ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('LoginPage ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('LoginPage ionViewDidLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton />
					</IonButtons>

					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<h1>Login</h1>
			</IonContent>
		</IonPage>
	);
}

export default LoginPage;
