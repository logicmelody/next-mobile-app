import React from 'react';

import DrawingLongHuLuJhu from '../../pages/drawing-long-hu-lu-jhu';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingLongHuLuJhuWithNavbar1 = {
	component: DrawingLongHuLuJhu,
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

const DrawingLongHuLuJhuWithNavbar2 = {
	component: DrawingLongHuLuJhu,
	title: '龙虎路珠',
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
	DRAWING_LONG_HU_LU_JHU_NAVBAR_1: DrawingLongHuLuJhuWithNavbar1,
	DRAWING_LONG_HU_LU_JHU_NAVBAR_2: DrawingLongHuLuJhuWithNavbar2,
};
