import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonButton,
} from '@ionic/react';

import {
	StyledMenuButton,
	StyledMenuTitle,
} from './styles';

function Tab2Page() {
	return (
		<IonPage>
			<IonHeader translucent={true}>
				<IonToolbar>
					<IonButtons slot="start">
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

					<IonTitle>
						<StyledMenuTitle>
							This is title
						</StyledMenuTitle>
					</IonTitle>

					<IonButtons slot="end">
						<IonButton> end 1 </IonButton>
						<IonButton> end 2 </IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
			</IonContent>
		</IonPage>
	);
}

export default Tab2Page;
