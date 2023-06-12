import withPage from './with-page';
import ServiceLocator from 'ljit-lib/service-locator';

const pageLocator = new ServiceLocator();

/*
	PageObject = {
		// Require
		title,
		component,
	}
*/
export function registerPage(path, pageObject) {
	pageLocator.register(path, {
		...pageObject,
		component: withPage(pageObject),
	});
}

export function getPage(path) {
	return pageLocator.get(path);
}
