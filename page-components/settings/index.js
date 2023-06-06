import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	IonButton,
} from '@ionic/react';

import { NavigationKeyEnums } from '../../navigation';

const {
	SETTINGS_DETAIL,
} = NavigationKeyEnums;

const propTypes = {
	setOnNavigatorEvent: PropTypes.func.isRequired,
	onNavigate: PropTypes.func.isRequired,
};

function SettingsPage({
	setOnNavigatorEvent,
	onNavigate,
}) {
	useEffect(() => {
		console.log('SettingsPage didMount');

		return () => {
			console.log('SettingsPage unMount');
		};

	}, []);

	useEffect(() => {
		setOnNavigatorEvent((event) => {
			switch (event) {
				case 'on-view-will-enter':
					console.log('SettingsPage on-view-will-enter');

					break;

				case 'on-view-did-enter':
					console.log('SettingsPage on-view-did-enter');

					break;

				case 'on-view-will-leave':
					console.log('SettingsPage on-view-will-leave');

					break;

				case 'on-view-did-leave':
					console.log('SettingsPage on-view-did-leave');

					break;

				default:
					break;
			};
		});

	}, [setOnNavigatorEvent]);

	return (
		<>
			<h1>SettingsPage</h1>

			<IonButton onClick={() => {
				onNavigate({
					page: SETTINGS_DETAIL,
					navigationType: 'push',
					navigationTitle: '詳細設定',
					passProps: {
						selectedId: 100,
						selectedName: '123',
					},
				});
			}}>
				Go to SettingsDetail
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
		</>
	);
}

SettingsPage.propTypes = propTypes;

export default SettingsPage;
