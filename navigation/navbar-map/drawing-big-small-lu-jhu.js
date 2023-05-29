import React from 'react';

import DrawingBigSmallLuJhu from '../../pages/drawing-big-small-lu-jhu';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingBigSmallLuJhuWithNavbar1 = {
	component: DrawingBigSmallLuJhu,
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

const DrawingBigSmallLuJhuWithNavbar2 = {
	component: DrawingBigSmallLuJhu,
	title: '大小路珠',
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
	DRAWING_BIG_SMALL_LU_JHU_NAVBAR_1: DrawingBigSmallLuJhuWithNavbar1,
	DRAWING_BIG_SMALL_LU_JHU_NAVBAR_2: DrawingBigSmallLuJhuWithNavbar2,
};
