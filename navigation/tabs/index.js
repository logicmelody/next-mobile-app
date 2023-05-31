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

const Tabs = {
	path: TABS,
	tabs: [
		{
			path: TAB1,
			component: Tab1,
			title: 'TAB1',
			tabLebal: 'TAB1',
		},
		{
			path: TAB2,
			component: Tab2,
			title: 'TAB2',
			tabLebal: 'TAB2',
		},
		{
			path: TAB3,
			component: Tab3,
			title: 'TAB3',
			tabLebal: 'TAB3',
		},
	],
};
