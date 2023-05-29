import React from 'react';

import DrawingOddEvenLuJhu from '../../pages/drawing-odd-even-lu-jhu';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemFilter from '../../../components/mobile-menu-item-filter';
import MobileMenuItemSetting from '../../../components/mobile-menu-item-setting';
import MobileMenuItemTrend from '../../../components/mobile-menu-item-trend';

const DrawingOddEvenLuJhuWithNavbar1 = {
	component: DrawingOddEvenLuJhu,
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

const DrawingOddEvenLuJhuWithNavbar2 = {
	component: DrawingOddEvenLuJhu,
	title: '单双路珠',
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
	DRAWING_ODD_EVEN_LU_JHU_NAVBAR_1: DrawingOddEvenLuJhuWithNavbar1,
	DRAWING_ODD_EVEN_LU_JHU_NAVBAR_2: DrawingOddEvenLuJhuWithNavbar2,
};
