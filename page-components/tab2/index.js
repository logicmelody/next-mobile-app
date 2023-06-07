import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
	IonButton,
	IonFab,
	IonFabButton,
	IonIcon,
} from '@ionic/react';
import {
	camera,
} from 'ionicons/icons';

import { ToolbarButton } from '../../ljit-react-mobile-navigation';

import {
	StyledMenuButton,
} from './styles';

const propTypes = {
	setOnNavigatorEvent: PropTypes.func.isRequired,
	onChangeNavigationTitle: PropTypes.func.isRequired,
	onRenderRightToolbarButtons: PropTypes.func.isRequired,
};

/*
componentDidMount 執行過後，就算 navigate 到別的 page，mount 的 component 還是會存在，所以需要有 lifecyle methods 來通知我們 page 現在是不是在畫面上

React LifeCycle Methods​

All the lifecycle methods in React (componentDidMount, componentWillUnmount, etc..) are available for you to use as well. However, since Ionic React manages the lifetime of a page, certain events might not fire when you expect them to. For instance, componentDidMount fires the first time a page is displayed, but if you navigate away from the page Ionic might keep the page around in the DOM, and a subsequent visit to the page might not call componentDidMount again. This scenario is the main reason the Ionic lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire.
*/
function Tab2Page({
	setOnNavigatorEvent,
	onChangeNavigationTitle,
	onRenderRightToolbarButtons,
}) {
	const [count, setCount] = useState(0);
	const [hasAdd3ToolbarButton, setHasAdd3ToolbarButton] = useState(true);
	const [hasAdd5ToolbarButton, setHasAdd5ToolbarButton] = useState(true);

	useEffect(() => {
		console.log('Tab2Page didMount');

		return () => {
			console.log('Tab2Page unMount');
		};

	}, []);

	useEffect(() => {
		setOnNavigatorEvent((event) => {
			switch (event) {
				case 'on-view-will-enter':
					console.log('Tab2Page on-view-will-enter');

					break;

				case 'on-view-did-enter':
					console.log('Tab2Page on-view-did-enter');

					break;

				case 'on-view-will-leave':
					console.log('Tab2Page on-view-will-leave');

					break;

				case 'on-view-did-leave':
					console.log('Tab2Page on-view-did-leave');

					break;

				case 'd':
					console.log('Tab2Page d');

					setCount(count + 1);

					break;

				case 'end-1':
					console.log('Tab2Page end-1');

					break;

				case 'end-2':
					console.log('Tab2Page end-2');

					break;

				default:
					break;
			}
		});

	}, [setOnNavigatorEvent, count]);

	useEffect(() => {
		let buttons = [];

		buttons.push((
			<ToolbarButton
				key='add-2'
				onClick={() => {
					console.log('Click add-2');

					setCount(count + 2);
				}}
			>
				Add 2
			</ToolbarButton>
		));

		if (hasAdd3ToolbarButton) {
			buttons.push((
				<ToolbarButton
					key='add-3'
					onClick={() => {
						console.log('Click add-3');

						setCount(count + 3);
					}}
				>
					Add 3
				</ToolbarButton>
			));
		}

		if (hasAdd5ToolbarButton) {
			buttons.push((
				<StyledMenuButton
					key='add-5'
					onClick={() => {
						console.log('Click add-5');

						setCount(count + 5);
					}}
				>
					5
				</StyledMenuButton>
			));
		}

		onRenderRightToolbarButtons(buttons);

	}, [onRenderRightToolbarButtons, count, hasAdd3ToolbarButton, hasAdd5ToolbarButton]);

	return (
		<>
			<IonFab vertical='bottom' horizontal='end' slot='fixed'>
				<IonFabButton
					onClick={() => {
						console.log('Take photo');
					}}
				>
					<IonIcon icon={camera}></IonIcon>
				</IonFabButton>
			</IonFab>

			<h1>{`count = ${count}`}</h1>

			<IonButton onClick={() => {
				setCount(prevCount => prevCount + 1);
			}}>
				Add
			</IonButton>

			<IonButton onClick={() => {
				onChangeNavigationTitle('Tab2 測試')
			}}>
				Change Title
			</IonButton>

			<IonButton onClick={() => {
				setHasAdd3ToolbarButton(false);
				setHasAdd5ToolbarButton(false);
			}}>
				Change right Toolbar buttons
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

Tab2Page.propTypes = propTypes;

export default Tab2Page;
