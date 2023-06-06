import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonItem,
	IonLabel,
	IonButton,
} from '@ionic/react';

import {
	StyledMenuTitle,
} from './styles';

import { NavigationKeyEnums } from '../../navigation';

const {
	SETTINGS,
} = NavigationKeyEnums;

const propTypes = {
	onNavigate: PropTypes.func.isRequired,
	setOnNavigatorEvent: PropTypes.func.isRequired,
};

function Tab3Page({
	onNavigate,
	setOnNavigatorEvent,
}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setOnNavigatorEvent((event) => {
			switch (event) {
				case 'on-click-title':
					console.log('Tab3Page on-click-title');

					break;

				default:
					break;
			}
		});

	}, [setOnNavigatorEvent]);

	return (
		<>
			<IonItem
				routerLink={SETTINGS}
			>
				<IonLabel>
					Go to Settings
				</IonLabel>
			</IonItem>

			<IonButton onClick={() => {
				onNavigate({
					page: SETTINGS,
					navigationType: 'push',
				});
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
				onNavigate({
					page: SETTINGS,
					navigationType: 'push',
				});
			}}>
				Go to Settings
			</IonButton>
		</>
	);

	// return (
	// 	<IonPage>
	// 		{/* NOTE: IonHeader 可以固定 Header 在 page 的最上面 */}
	// 		<IonHeader>
	// 			<StyledMenuTitle>
	// 				Tab3Page
	// 			</StyledMenuTitle>
	// 		</IonHeader>

	// 		{/* <IonHeader>
	// 			<IonToolbar>
	// 				<StyledMenuTitle>
	// 					Tab3Page
	// 				</StyledMenuTitle>
	// 			</IonToolbar>
	// 		</IonHeader> */}

	// 		<IonContent fullscreen>
	// 			<IonItem
	// 				routerLink={SETTINGS}
	// 			>
	// 				<IonLabel>
	// 					Go to Settings
	// 				</IonLabel>
	// 			</IonItem>

	// 			<IonButton onClick={() => {
	// 				router.push(SETTINGS);
	// 			}}>
	// 				Go to Settings
	// 			</IonButton>

	// 			<h1>{count}</h1>

	// 			<IonButton onClick={() => {
	// 				setCount(count + 1);
	// 			}}>
	// 				Add count
	// 			</IonButton>

	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>
	// 			<h1>Test</h1>

	// 			<IonButton onClick={() => {
	// 				router.push(SETTINGS);
	// 			}}>
	// 				Go to Settings
	// 			</IonButton>
	// 		</IonContent>
	// 	</IonPage>
	// );
}

Tab3Page.propTypes = propTypes;

export default Tab3Page;
