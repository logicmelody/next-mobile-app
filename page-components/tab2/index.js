import { useEffect, useState } from 'react';

import {
	IonContent,
	IonHeader,
	IonPage,
	IonFooter,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonButton,
	IonSearchbar,
	IonProgressBar,
	IonFab,
	IonFabButton,
	IonIcon,
	useIonRouter,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';
import {
	camera,
} from 'ionicons/icons';

import {
	StyledMenuButton,
	StyledMenuTitle,
} from './styles';

/*
componentDidMount 執行過後，就算 navigate 到別的 page，mount 的 component 還是會存在，所以需要有 lifecyle methods 來通知我們 page 現在是不是在畫面上

React LifeCycle Methods​

All the lifecycle methods in React (componentDidMount, componentWillUnmount, etc..) are available for you to use as well. However, since Ionic React manages the lifetime of a page, certain events might not fire when you expect them to. For instance, componentDidMount fires the first time a page is displayed, but if you navigate away from the page Ionic might keep the page around in the DOM, and a subsequent visit to the page might not call componentDidMount again. This scenario is the main reason the Ionic lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire.
*/
function Tab2Page() {
	const [count, setCount] = useState(0);

	const router = useIonRouter();

	useEffect(() => {
		console.log('Tab2Page didMount');

		return () => {
			console.log('Tab2Page unMount');
		};

	}, []);

	useIonViewWillEnter(() => {
		// it's a good method to load data from services.

		console.log('Tab2Page ionViewWillEnter event fired');
	});

	useIonViewDidEnter(() => {
		// This event won't fire until after the page is visible to the user.

		console.log('Tab2Page ionViewDidEnter event fired');
	});

	useIonViewWillLeave(() => {
		// Can be used for cleanup, like unsubscribing from data sources.

		console.log('Tab2Page ionViewWillLeave event fired');
	});

	useIonViewDidLeave(() => {
		console.log('Tab2Page ionViewDidLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader
				translucent
				className='ion-no-border'
				collapse='fade'
			>
				{/* // NOTE: 如果放在 IonHeader 或是 IonFooter，位置會被固定，如果放在 IonContent 中，會跟著 page scoll */}
				<IonToolbar>
					<IonButtons slot='start'>
						<StyledMenuButton
							onClick={() => {
								console.log('Click D');
							}}
						>
							D
						</StyledMenuButton>

						<IonButton onClick={() => {
							console.log('Click Start 2');
						}}>
							Start 2
						</IonButton>
					</IonButtons>

					<StyledMenuTitle>
						<IonButton onClick={() => {
							console.log('Click title');
						}}>
							This is title
						</IonButton>
					</StyledMenuTitle>

					<IonButtons slot='end'>
						<IonButton> end 1 </IonButton>
						<IonButton> end 2 </IonButton>
					</IonButtons>
				</IonToolbar>

				<IonToolbar>
					<IonSearchbar />
				</IonToolbar>

				<IonProgressBar type='indeterminate'></IonProgressBar>
			</IonHeader>
			<IonContent fullscreen>
				<IonFab vertical='bottom' horizontal='end' slot='fixed'>
					<IonFabButton
						onClick={() => {
							console.log('Take photo');
						}}
					>
						<IonIcon icon={camera}></IonIcon>
					</IonFabButton>
				</IonFab>

				<h1>{`count = ${count}`}</h1>

				<IonButton onClick={() => {
					setCount(prevCount => prevCount + 1);
				}}>
					Add
				</IonButton>

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

			<IonFooter>
				<IonToolbar>
					<IonButton onClick={() => {
						router.push('/third-party-games');
					}}>
						Go to ThirdPartyGamesPage
					</IonButton>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
}

export default Tab2Page;
