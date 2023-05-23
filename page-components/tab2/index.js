import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonButton,
} from '@ionic/react';

function Tab2Page() {
	return (
		<IonPage>
			<IonHeader translucent={true}>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton> Start 1 </IonButton>
						<IonButton> Start 2 </IonButton>
					</IonButtons>

					<IonTitle>
						<button>This is title</button>
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
