import React from 'react';

import DrawingSumLuJhu from '../../pages/drawing-sum-lu-jhu';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingSumLuJhuWithNavbar1 = {
	component: DrawingSumLuJhu,
	title: (
		<MobileLotteryPlayTitle
			shouldHandleTimeout={false}
		/>
	),
	toolbarButtons: {
		rightButtons: [
			{
				id: 'filter-drawer',
				component: <MobileMenuItemFilter />,
			}
		],
	},
};

const DrawingSumLuJhuWithNavbar2 = {
	component: DrawingSumLuJhu,
	title: '总和路珠',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'trend-drawer',
				component: <MobileMenuItemTrend />,
			},
			{
				id: 'filter-drawer',
				component: <MobileMenuItemSetting />,
			},
		],
	},
};

export default {
	DRAWING_SUM_LU_JHU_NAVBAR_1: DrawingSumLuJhuWithNavbar1,
	DRAWING_SUM_LU_JHU_NAVBAR_2: DrawingSumLuJhuWithNavbar2,
};
