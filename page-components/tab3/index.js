import {
	IonContent,
	IonHeader,
	IonPage,
} from '@ionic/react';

import {
	StyledMenuTitle,
} from './styles';

function Tab3Page() {
	return (
		<IonPage>
			{/* NOTE: IonHeader 可以固定 Header 在 page 的最上面 */}
			<IonHeader>
				<StyledMenuTitle>
					Tab3Page
				</StyledMenuTitle>
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
		</IonPage>
	);
}

export default Tab3Page;
