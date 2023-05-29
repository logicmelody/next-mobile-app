import React from 'react';
import getMobileHeaderLogo from '../../../images/mobile-header-logo';
import MobileMenuItemWallet  from '../../../features/mobile-menu-item-wallet';
import MobileMenuItemLogout  from '../../../features/mobile-menu-item-logout';

import Home2 from '../../pages/home2';

const Home2WithNavbar1 = {
	component: Home2,
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
const Home2WithNavbar2 = {
	component: Home2,
	title: (
		<img src={getMobileHeaderLogo()} style={{ height: '44px' }}/>
	),
	toolbarButtons: {
		rightButtons: [
			{
				id: 'logout',
				component: <MobileMenuItemLogout />,
			}
		],
	},
};

export default {
	HOME2_NAVBAR_1: Home2WithNavbar1,
	HOME2_NAVBAR_2: Home2WithNavbar2,
};
