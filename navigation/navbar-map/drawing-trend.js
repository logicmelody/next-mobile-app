import React from 'react';

import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemText from '../../../components/mobile-menu-item-text';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';
import DrawingTrend from '../../pages/drawing-trend';

const DrawingTrendWithNavbar1 = {
	component: DrawingTrend,
	title: '走势图',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'filter',
				component: <MobileMenuItemText text='进阶筛选' />,
			}
		],
	},
};

const DrawingTrendWithNavbar2 = {
	component: DrawingTrend,
	title: '走势图',
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

const DrawingTrendWithNavbar3 = {
	component: DrawingTrend,
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

export default {
	DRAWING_TREND_NAVBAR_1: DrawingTrendWithNavbar1,
	DRAWING_TREND_NAVBAR_2: DrawingTrendWithNavbar2,
	DRAWING_TREND_NAVBAR_3: DrawingTrendWithNavbar3,
};
