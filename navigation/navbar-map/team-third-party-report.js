import React from 'react';
import { loadComponent, } from '../../../lib/react-utils';
import MobileMenuItemSearch from '../../../components/mobile-menu-item-search';

const AgentTeamThirdPartyReport = loadComponent({ loader: () => import('../../pages/member-center/agent/team-third-party-report') });

const AgentTeamThirdPartyReportWithNavbar1 = {
	component: AgentTeamThirdPartyReport,
	title: '娱乐报表',
};

const AgentTeamThirdPartyReportWithNavbar2 = {
	component: AgentTeamThirdPartyReport,
	title: '娱乐报表',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'agent-team-third-party-report-advanced-search',
				component: <MobileMenuItemSearch/>,
			}
		],
	},
};

export default {
	AGENT_TEAM_THIRD_PARTY_REPORT_NAVBAR_1: AgentTeamThirdPartyReportWithNavbar1,
	AGENT_TEAM_THIRD_PARTY_REPORT_NAVBAR_2: AgentTeamThirdPartyReportWithNavbar2,
};
