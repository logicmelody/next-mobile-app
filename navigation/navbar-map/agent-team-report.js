import React from 'react';
import { loadComponent, } from '../../../lib/react-utils';
import MobileMenuItemSearch from '../../../components/mobile-menu-item-search';

const AgentTeamReport = loadComponent({ loader: () => import('../../pages/member-center/agent/team-report') });

const AgentTeamReportWithNavbar1 = {
	component: AgentTeamReport,
	title: '团队报表',
};

const AgentTeamReportWithNavbar2 = {
	component: AgentTeamReport,
	title: '团队报表',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'search',
				component: <MobileMenuItemSearch />,
			}
		],
	},
};


export default {
	AGENT_TEAM_REPORT_NAVBAR_1: AgentTeamReportWithNavbar1,
	AGENT_TEAM_REPORT_NAVBAR_2: AgentTeamReportWithNavbar2,
};
