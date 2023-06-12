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

// 註冊 tab
registerPage(TAB1, {
	tabLabel: 'TAB1',
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
	tabLabel: 'TAB2',
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
	tabLabel: 'TAB3',
	component: Tab3,
	title: 'TAB3',
	hasBackButton: false,
});

registerPage(TAB4, {
	tabLabel: 'TAB4',
	component: Tab4,
	title: 'TAB4',
	hasBackButton: false,
	hasHeader: false,
});


const Tabs = {
	// tab 的 root route 路徑
	path: TABS,

	// 要把所有會作用 tab 的 route 宣告成一個 array
	tabPages: [
		TAB1,
		TAB2,
		TAB3,
		TAB4,
	],
};

export default Tabs;
