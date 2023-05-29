import React from 'react';

import MobileMenuItemText from '../../../components/mobile-menu-item-text';
import { loadComponent, } from '../../../lib/react-utils';

const TraceDiscard = loadComponent({ loader: () => import('../../pages/member-center/member/betting-records/trace-discard') });

const TraceDiscardWithNavbar1 = {
	component: TraceDiscard,
	title: '追号撤单',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'discard',
				component: <MobileMenuItemText text='撤单' />,
			}
		],
	},
};

const TraceDiscardWithNavbar2 = {
	component: TraceDiscard,
	title: '追号撤单',
};

export default {
	TRACE_DISCARD_NAVBAR_1: TraceDiscardWithNavbar1,
	TRACE_DISCARD_NAVBAR_2: TraceDiscardWithNavbar2,
};
