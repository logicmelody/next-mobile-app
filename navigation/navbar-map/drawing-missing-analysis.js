import React from 'react';

import DrawingMissingAnalysis from '../../pages/drawing-missing-analysis';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingMissingAnalysisWithNavbar1 = {
	component: DrawingMissingAnalysis,
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

const DrawingMissingAnalysisWithNavbar2 = {
	component: DrawingMissingAnalysis,
	title: '遺漏分析',
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
	DRAWING_MISSING_ANALYSIS_NAVBAR_1: DrawingMissingAnalysisWithNavbar1,
	DRAWING_MISSING_ANALYSIS_NAVBAR_2: DrawingMissingAnalysisWithNavbar2,
};
