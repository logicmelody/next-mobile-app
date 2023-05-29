import React from 'react';
import MobileMenuItemWallet  from '../../../features/mobile-menu-item-wallet';

import Home from '../../pages/home';

const HomeWithNavbar1 = {
	component: Home,
	title: '首页',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'wallet',
				icon: 'fa-wallet',
				component: <MobileMenuItemWallet />,
			}
		],
	},
};

const HomeWithNavbar2 = {
	component: Home,
	title: '游戏大厅',
};


export default {
	HOME_NAVBAR_1: HomeWithNavbar1,
	HOME_NAVBAR_2: HomeWithNavbar2,
};
