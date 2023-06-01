import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonFooter,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonBackButton,
	IonSearchbar,
	IonProgressBar,
	useIonRouter,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

import Toolbar from './toolbar';

/*
	pageObject = {
		// Require
		title,
		component,

		// Optional
		isToolbarHidden: true / false,

		toolbarButtons: {
			leftButtons: [
				{
					id: 'wallet',
					icon: 'fa-wallet', (Onsen UI 提供的 icon：FontAwesome Ionicons MaterialDesignIconicFont)
					component: (自己定義要 render 的 component)
				}
			],

			rightButtons: [

			],
		},
	}
*/
function withPage(pageObject) {
	let onNavigatorEvent = () => {};

	const propTypes = {
		navigationType: PropTypes.string,
		navigationTitle: PropTypes.string,
		hiddenToolbarRightButtonIds: PropTypes.array,
	};

	const defaultProps = {
		navigationType: '',
		navigationTitle: '',
		hiddenToolbarRightButtonIds: [],
	};

	function WithPageComponent(props) {
		const router = useIonRouter();

		const [_navigationTitle, setNavigationTitle] = useState('');

		const {
			navigationType,
			hiddenToolbarRightButtonIds,
		} = props;

		const {
			title,
			hasBackButton = true,
			component: PageComponent,
			isToolbarHidden,
			toolbarButtons = {},
		} = pageObject;

		const {
			routeOptions = {},
		} = router.routeInfo;

		const {
			navigationTitle,
		} = routeOptions;

		useIonViewWillEnter(() => {
			// it's a good method to load data from services.
			_handleNavigatorEvent('on-view-will-enter');
		});
	
		useIonViewDidEnter(() => {
			// This event won't fire until after the page is visible to the user.
			_handleNavigatorEvent('on-view-did-enter');
		});
	
		useIonViewWillLeave(() => {
			// Can be used for cleanup, like unsubscribing from data sources.
			_handleNavigatorEvent('on-view-will-leave');
		});
	
		useIonViewDidLeave(() => {
			_handleNavigatorEvent('on-view-did-leave');
		});

		function _handleOnNavigate({
			page,
			navigationType,
			navigationTitle,
			// hiddenToolbarRightButtonIds = [],
			passProps = {},
		}) {
			switch (navigationType) {
				case 'push': {
					router.push(page, 'forward', 'push', {
						...passProps,
						navigationTitle,
					});

					return;
				}

				case 'replace': {
					router.push(page, 'root', 'replace');

					return;
				}

				default:
					return;
			}
		}

		function _handleOnBack() {
			if (router.canGoBack()) {
				router.goBack();
			}
		}

		function _handleNavigatorEvent(event) {
			if (!onNavigatorEvent) {
				return;
			}

			onNavigatorEvent(event);
		}

		// function _renderRightButtons(rightButtons) {
		// 	if (rightButtons && rightButtons.length > 0) {
		// 		return (
		// 			<div className="right">
		// 				{
		// 					rightButtons
		// 						.filter(button => !hiddenToolbarRightButtonIds.includes(button.id))
		// 						.map((button, index) => {
		// 							return (
		// 								<ToolbarButton
		// 									key={button.id + index}
		// 									onClick={() => {
		// 										_handleNavigatorEvent(button.id);
		// 									}}
		// 								>
		// 									{_renderButtonContent(button)}
		// 								</ToolbarButton>
		// 							);
		// 						})
		// 				}
		// 			</div>
		// 		);
		// 	}
		// }

		// function _renderButtonContent(button) {
		// 	return button.component ?
		// 		button.component : <Icon icon={button.icon} />;
		// }

		return (
			<IonPage>
				<IonHeader
					translucent
					className='ion-no-border'
					collapse='fade'
				>
					{/* // NOTE: 如果放在 IonHeader 或是 IonFooter，位置會被固定，如果放在 IonContent 中，會跟著 page scoll */}
					<Toolbar
						navigationTitle={navigationTitle}
						title={title}
						hasBackButton={hasBackButton}
					/>
				</IonHeader>

				<IonContent fullscreen>
					<PageComponent
						setOnNavigatorEvent={(func) => {
							if (typeof func !== 'function') {
								return;
							}

							onNavigatorEvent = func;
						}}
						onNavigate={_handleOnNavigate}
						onBack={_handleOnBack}
						onChangeNavigationTitle={(title) => {
							setNavigationTitle(title);
						}}
						{...props}
						{...routeOptions}
					/>
				</IonContent>
			</IonPage>
		);
	}

	WithPageComponent.propTypes = propTypes;
	WithPageComponent.defaultProps = defaultProps;

	return WithPageComponent;
}

export default withPage;
