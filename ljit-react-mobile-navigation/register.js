import withPage from './with-page';
import ServiceLocator from 'ljit-lib/service-locator';

const pageLocator = new ServiceLocator();

/*
	PageObject = {
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
export function registerPage(path, pageObject) {
	pageLocator.register(path, withPage(pageObject));
}

export function getPage(path) {
	return pageLocator.get(path);
}
