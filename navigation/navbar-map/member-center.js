import React from 'react';
import MobileMenuItemLogout  from '../../../features/mobile-menu-item-logout';

import MemberCenter from '../../pages/member-center';

const MemberCenterWithNavbar1 = {
	component: MemberCenter,
	title: '会员中心',
	isToolbarHidden: true,
};

const MemberCenterWithNavbar2 = {
	component: MemberCenter,
	title: '个人中心',
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
	MEMBER_CENTER_NAVBAR_1: MemberCenterWithNavbar1,
	MEMBER_CENTER_NAVBAR_2: MemberCenterWithNavbar2,
};
