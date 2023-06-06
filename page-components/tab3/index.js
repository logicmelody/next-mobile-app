import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	IonItem,
	IonLabel,
	IonButton,
} from '@ionic/react';

import RedHeader from './red-header';

import { NavigationKeyEnums } from '../../navigation';

const {
	SETTINGS,
} = NavigationKeyEnums;

const propTypes = {
	onNavigate: PropTypes.func.isRequired,
	setOnNavigatorEvent: PropTypes.func.isRequired,
	onRenderToolbarHeader: PropTypes.func.isRequired,
};

function Tab3Page({
	onNavigate,
	setOnNavigatorEvent,
	onRenderToolbarHeader,
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

	useEffect(() => {
		onRenderToolbarHeader((
			<RedHeader
				onClickTitle={() => {
					console.log('Click RedHeader');
				}}
			/>
		));

	}, [onRenderToolbarHeader]);

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
}

Tab3Page.propTypes = propTypes;

export default Tab3Page;
