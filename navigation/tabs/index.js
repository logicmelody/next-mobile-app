import { registerPage } from '../../ljit-react-mobile-navigation';

import { NavigationKeyEnums } from '../';

import Tab1 from '../../page-components/tab1';
import Tab2 from '../../page-components/tab2';
import Tab3 from '../../page-components/tab3';

const {
	TABS,
	TAB1,
	TAB2,
	TAB3,
} = NavigationKeyEnums;

registerPage(TAB1, {
	component: Tab1,
	title: 'TAB1',
	hasBackButton: false,
	tabLebal: 'TAB1',
});

registerPage(TAB2, {
	component: Tab2,
	title: 'TAB2',
	hasBackButton: false,
	tabLebal: 'TAB2',
});

registerPage(TAB3, {
	component: Tab3,
	title: 'TAB3',
	hasBackButton: false,
	tabLebal: 'TAB3',
});

const Tabs = {
	path: TABS,
	tabPages: [
		TAB1,
		TAB2,
		TAB3,
	],
};

export default Tabs;
