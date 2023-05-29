import React from 'react';

import DrawingStatistics from '../../pages/drawing-statistics';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingStatisticsTrendWithNavbar1 = {
	component: DrawingStatistics,
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

const DrawingStatisticsTrendWithNavbar2 = {
	component: DrawingStatistics,
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

export default {
	DRAWING_STATISTICS_TREND_NAVBAR_1: DrawingStatisticsTrendWithNavbar1,
	DRAWING_STATISTICS_TREND_NAVBAR_2: DrawingStatisticsTrendWithNavbar2,
};
