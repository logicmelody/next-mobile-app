import {
	IonContent,
	IonHeader,
	IonPage,
	IonToolbar,
	IonItem,
	IonLabel,
	IonButton,
} from '@ionic/react';

import {
	StyledMenuTitle,
} from './styles';

function Tab3Page({
	history,
}) {
	return (
		<IonPage>
			{/* NOTE: IonHeader 可以固定 Header 在 page 的最上面 */}
			<IonHeader>
				<StyledMenuTitle>
					Tab3Page
				</StyledMenuTitle>
			</IonHeader>

			{/* <IonHeader>
				<IonToolbar>
					<StyledMenuTitle>
						Tab3Page
					</StyledMenuTitle>
				</IonToolbar>
			</IonHeader> */}

			<IonContent fullscreen>
				<IonItem
					routerLink='/settings'
					// routerDirection='back'
				>
					<IonLabel>
						Go to Lottery
					</IonLabel>
				</IonItem>

				<IonButton onClick={() => {
					history.push('/settings');
				}}>
					Go to Settings
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

export default Tab3Page;
