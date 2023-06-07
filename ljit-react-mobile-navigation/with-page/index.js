import React, { useState, useRef, useCallback } from 'react';
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
	}
*/
function withPage(pageObject) {
	function WithPageComponent(props) {
		const router = useIonRouter();
		const onNavigatorEvent = useRef();

		const [_navigationTitle, setNavigationTitle] = useState('');
		const [toolbarHeaderComponent, setToolbarHeaderComponent] = useState();
		const [leftToolbarButtons, setLeftToolbarButtons] = useState([]);
		const [rightToolbarButtons, setRightToolbarButtons] = useState([]);

		const {
			title,
			component: PageComponent,
			hasBackButton = true,
			hasHeader = true,
		} = pageObject;

		const {
			routeOptions = {},
		} = router.routeInfo;

		const {
			navigationTitle,
		} = routeOptions;

		const memoizedSetOnNavigatorEvent = useCallback((func) => {
			if (typeof func !== 'function') {
				return;
			}

			onNavigatorEvent.current = func;

		}, []);

		const memoizedOnRenderToolbarHeader = useCallback((component) => {
			setToolbarHeaderComponent(component);

		}, []);

		const memoizedOnRenderLeftToolbarButtons = useCallback((buttons) => {
			setLeftToolbarButtons(buttons);

		}, []);

		const memoizedOnRenderRightToolbarButtons = useCallback((buttons) => {
			setRightToolbarButtons(buttons);

		}, []);

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
					headerComponent={toolbarHeaderComponent}
					hasBackButton={hasBackButton}
					leftToolbarButtons={leftToolbarButtons}
					rightToolbarButtons={rightToolbarButtons}
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
						setOnNavigatorEvent={memoizedSetOnNavigatorEvent}
						onNavigate={_handleOnNavigate}
						onBack={_handleOnBack}
						onChangeNavigationTitle={(title) => {
							setNavigationTitle(title);
						}}
						onRenderToolbarHeader={memoizedOnRenderToolbarHeader}
						onRenderLeftToolbarButtons={memoizedOnRenderLeftToolbarButtons}
						onRenderRightToolbarButtons={memoizedOnRenderRightToolbarButtons}
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
