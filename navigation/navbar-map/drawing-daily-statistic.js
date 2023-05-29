import React from 'react';

import DrawingDailyStatistic from '../../pages/drawing-daily-statistic';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingDailyStatisticWithNavbar1 = {
	component: DrawingDailyStatistic,
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

const DrawingDailyStatisticWithNavbar2 = {
	component: DrawingDailyStatistic,
	title: '今日统计',
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
	DRAWING_DAILY_STATISTIC_NAVBAR_1: DrawingDailyStatisticWithNavbar1,
	DRAWING_DAILY_STATISTIC_NAVBAR_2: DrawingDailyStatisticWithNavbar2,
};
