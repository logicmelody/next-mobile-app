import React from 'react';

import DrawingHotColdAnalysis from '../../pages/drawing-hot-cold-analysis';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingHotColdAnalysisWithNavbar1 = {
	component: DrawingHotColdAnalysis,
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

const DrawingHotColdAnalysisWithNavbar2 = {
	component: DrawingHotColdAnalysis,
	title: '冷热分析',
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
	DRAWING_HOT_COLD_ANALYSIS_NAVBAR_1: DrawingHotColdAnalysisWithNavbar1,
	DRAWING_HOT_COLD_ANALYSIS_NAVBAR_2: DrawingHotColdAnalysisWithNavbar2,
};
