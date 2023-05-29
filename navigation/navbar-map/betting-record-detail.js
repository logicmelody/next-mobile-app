import React from 'react';

import MobileMenuItemText from '../../../components/mobile-menu-item-text';
import { loadComponent, } from '../../../lib/react-utils';

const BettingRecordDetail = loadComponent({ loader: () => import('../../pages/member-center/betting-record-detail') });

const BettingRecordDetailWithNavbar1 = {
	component: BettingRecordDetail,
	title: '投注详情',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'discard',
				component: <MobileMenuItemText text='撤单' />,
			}
		],
	},
};

const BettingRecordDetailWithNavbar2 = {
	component: BettingRecordDetail,
	title: '投注详情',
};

export default {
	BETTING_RECORD_DETAIL_NAVBAR_1: BettingRecordDetailWithNavbar1,
	BETTING_RECORD_DETAIL_NAVBAR_2: BettingRecordDetailWithNavbar2,
};
