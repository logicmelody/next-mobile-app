import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSegment,
	IonSegmentButton,
	IonLabel,
} from '@ionic/react';

function Tab1Page() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
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
