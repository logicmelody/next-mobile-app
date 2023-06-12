import Image from 'next/image';

import { registerPage } from '../../ibear-react-mobile-navigation';

import { NavigationKeyEnums } from '../';

import Tab1 from '../../page-components/tab1';
import Tab2 from '../../page-components/tab2';
import Tab3 from '../../page-components/tab3';
import Tab4 from '../../page-components/tab4';

import Tab2TabIcon from '../../components/tab2-tab-icon';

import BookImage from '../../public/images/book.svg';
import BookSelectedImage from '../../public/images/book-selected.svg';

const {
	TABS,
	TAB1,
	TAB2,
	TAB3,
	TAB4,
} = NavigationKeyEnums;

registerPage(TAB1, {
	tabLebal: 'TAB1',
	tabIcon: (
		<Image
			src={BookImage}
			alt='book-tab'
			width={30}
			height={30}
		/>
	),
	selectedTabIcon: (
		<Image
			src={BookSelectedImage}
			alt='book-selected-tab'
			width={30}
			height={30}
		/>
	),
	component: Tab1,
	title: 'TAB1',
	hasBackButton: false,
});

registerPage(TAB2, {
	tabLebal: 'TAB2',
	tabIcon: (
		<Tab2TabIcon />
	),
	selectedTabIcon: (
		<Tab2TabIcon
			isSelected
		/>
	),
	component: Tab2,
	title: 'TAB2',
	hasBackButton: false,
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
