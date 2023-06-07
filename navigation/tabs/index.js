import {
	IonButton,
} from '@ionic/react';

import { registerPage } from '../../ljit-react-mobile-navigation';

import { NavigationKeyEnums } from '../';

import MobileMenuItemDButton from '../../components/mobile-menu-item-d-button';

import Tab1 from '../../page-components/tab1';
import Tab2 from '../../page-components/tab2';
import Tab3 from '../../page-components/tab3';
import Tab4 from '../../page-components/tab4';

const {
	TABS,
	TAB1,
	TAB2,
	TAB3,
	TAB4,
} = NavigationKeyEnums;

registerPage(TAB1, {
	tabLebal: 'TAB1',
	component: Tab1,
	title: 'TAB1',
	hasBackButton: false,
});

registerPage(TAB2, {
	tabLebal: 'TAB2',
	component: Tab2,
	title: 'TAB2',
	hasBackButton: false,
	toolbarButtons: {
		leftButtons: [
			{
				id: 'd',
				component: <MobileMenuItemDButton />,
			},
		],
	},
});

registerPage(TAB3, {
	tabLebal: 'TAB3',
	component: Tab3,
	title: 'TAB3',
	hasBackButton: false,
});

registerPage(TAB4, {
	tabLebal: 'TAB4',
	component: Tab4,
	title: 'TAB4',
	hasBackButton: false,
	hasHeader: false,
});

const Tabs = {
	path: TABS,
	tabPages: [
		TAB1,
		TAB2,
		TAB3,
		TAB4,
	],
};

export default Tabs;
