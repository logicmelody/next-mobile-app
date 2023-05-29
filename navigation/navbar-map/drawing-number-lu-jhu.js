import React from 'react';

import DrawingNumberLuJhu from '../../pages/drawing-number-lu-jhu';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingNumberLuJhuWithNavbar1 = {
	component: DrawingNumberLuJhu,
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

const DrawingNumberLuJhuWithNavbar2 = {
	component: DrawingNumberLuJhu,
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
	DRAWING_NUMBER_LU_JHU_NAVBAR_1: DrawingNumberLuJhuWithNavbar1,
	DRAWING_NUMBER_LU_JHU_NAVBAR_2: DrawingNumberLuJhuWithNavbar2,
};
