import { useState } from 'react';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonItem,
	IonLabel,
	IonButton,
	useIonRouter,
} from '@ionic/react';

import {
	StyledMenuTitle,
} from './styles';

import { NavigationKeyEnums } from '../../navigation';

const {
	SETTINGS,
} = NavigationKeyEnums;

function Tab3Page() {
	const router = useIonRouter();

	const [count, setCount] = useState(0);

	console.log('Tab3Page router', router);

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
					routerLink={SETTINGS}
				>
					<IonLabel>
						Go to Settings
					</IonLabel>
				</IonItem>

				<IonButton onClick={() => {
					router.push(SETTINGS);
				}}>
					Go to Settings
				</IonButton>

				<h1>{count}</h1>

				<IonButton onClick={() => {
					setCount(count + 1);
				}}>
					Add count
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

				<IonButton onClick={() => {
					router.push(SETTINGS);
				}}>
					Go to Settings
				</IonButton>
			</IonContent>
		</IonPage>
	);
}

export default Tab3Page;
