import React from 'react';

import { loadComponent, } from '../../../lib/react-utils';
import MobileMenuItemText from '../../../components/mobile-menu-item-text';
import MobileMenuItemSearch from '../../../components/mobile-menu-item-search';

const AgentMemberManagement = loadComponent({ loader: () => import('../../pages/member-center/agent/member-management') });

const AgentMemberManagementNavbar1 = {
	component: AgentMemberManagement,
	title: '会员管理',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'create-user',
				component: <MobileMenuItemText text='新增会员' />,
			}
		],
	},
};

const AgentMemberManagementNavbar2 = {
	component: AgentMemberManagement,
	title: '会员管理',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'advanced-search',
				component: <MobileMenuItemSearch/>,
			}
		],
	},
};

export default {
	AGENT_MEMBER_MANAGEMENT_NAVBAR_1: AgentMemberManagementNavbar1,
	AGENT_MEMBER_MANAGEMENT_NAVBAR_2: AgentMemberManagementNavbar2,
};
