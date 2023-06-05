import React, { useState, useRef } from 'react';
import {
	IonContent,
	IonPage,
	useIonRouter,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

import Header from './header';

/*
	pageObject = {
		// Require
		title,
		component,

		// Optional
		hasHeader: true / false,
		header: 自己的 header component

		toolbarButtons: {
			leftButtons: [
				{
					id: 'wallet',
					component: (自己定義要 render 的 component)
				}
			],

			rightButtons: [],
		},
	}
*/
function withPage(pageObject) {
	function WithPageComponent(props) {
		const router = useIonRouter();
		const onNavigatorEvent = useRef();

		const [_navigationTitle, setNavigationTitle] = useState('');

		const {
			title,
			component: PageComponent,
			header: HeaderComponent,
			hasBackButton = true,
			hasHeader = true,
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
			if (!onNavigatorEvent.current) {
				return;
			}

			onNavigatorEvent.current(event);
		}

		function _renderHeader() {
			if (!hasHeader) {
				return null;
			}

			return (
				<Header
					navigationTitle={navigationTitle}
					title={_navigationTitle || title}
					HeaderComponent={HeaderComponent}
					hasBackButton={hasBackButton}
					toolbarButtons={toolbarButtons}
					onClickTitle={() => {
						_handleNavigatorEvent('on-click-title');
					}}
					onClickButton={(id) => {
						_handleNavigatorEvent(id);
					}}
				/>
			);
		}

		return (
			<IonPage>
				{_renderHeader()}

				<IonContent fullscreen>
					<PageComponent
						setOnNavigatorEvent={(func) => {
							if (typeof func !== 'function') {
								return;
							}

							onNavigatorEvent.current = func;
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

	return WithPageComponent;
}

export default withPage;
