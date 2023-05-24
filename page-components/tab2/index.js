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
} from '@ionic/react';

import {
	StyledMenuButton,
	StyledMenuTitle,
} from './styles';

function Tab2Page() {
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
						<IonButton>
							<StyledMenuButton
								onClick={() => {
									console.log('Click D');
								}}
							>
								D
							</StyledMenuButton>
						</IonButton>

						<IonButton onClick={() => {
							console.log('Click Start 2');
						}}>
							Start 2
						</IonButton>
					</IonButtons>

					<IonTitle slot='center'>
						<StyledMenuTitle>
							This is title
						</StyledMenuTitle>
					</IonTitle>

					<IonButtons slot='end'>
						<IonButton> end 1 </IonButton>
						<IonButton> end 2 </IonButton>
					</IonButtons>
				</IonToolbar>

				<IonToolbar>
					<IonSearchbar />
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

			<IonFooter>
				<IonToolbar>
					<IonTitle>Footer Toolbar</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
}

export default Tab2Page;
