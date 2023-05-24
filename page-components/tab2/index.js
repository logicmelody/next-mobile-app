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

				<IonProgressBar type="indeterminate"></IonProgressBar>
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
