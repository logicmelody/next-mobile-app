import { Share } from '@capacitor/share';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSegment,
	IonSegmentButton,
	IonLabel,
	IonButtons,
	IonButton,
	IonBackButton,
} from '@ionic/react';

function Tab1Page() {
	const share = async () => {
		await Share.share({
			title: 'Simons YT Channel',
			text: 'Learn to build awesome mobile apps!',
			url: 'https://www.youtube.com/simongrimmdev_',
			dialogTitle: 'Share with friends'
		})
			.then(() => console.log('Successful share'))
			.catch((error) => console.log('Error sharing', error));
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton />
					</IonButtons>

					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
				
				<IonToolbar>
					<IonSegment value="all">
						<IonSegmentButton value="all">
							<IonLabel>All</IonLabel>
						</IonSegmentButton>

						<IonSegmentButton value="favorites">
							<IonLabel>Favorites</IonLabel>
						</IonSegmentButton>
					</IonSegment>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Tab 12323</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonButton onClick={() => {
					share();
				}}>
					Share
				</IonButton>

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

export default Tab1Page;
