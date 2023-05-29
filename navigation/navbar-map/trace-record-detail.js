import React from 'react';

import MobileMenuItemText from '../../../components/mobile-menu-item-text';
import { loadComponent, } from '../../../lib/react-utils';

const TraceRecordDetail = loadComponent({ loader: () => import('../../pages/member-center/trace-record-detail') });

const TraceRecordDetailWithNavbar1 = {
	component: TraceRecordDetail,
	title: '追号详情',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'discard',
				component: <MobileMenuItemText text='撤单' />,
			}
		],
	},
};

const TraceRecordDetailWithNavbar2 = {
	component: TraceRecordDetail,
	title: '追号详情',
};

export default {
	TRACE_RECORD_DETAIL_NAVBAR_1: TraceRecordDetailWithNavbar1,
	TRACE_RECORD_DETAIL_NAVBAR_2: TraceRecordDetailWithNavbar2,
};
