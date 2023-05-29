import React from 'react';
import { loadComponent, } from '../../../lib/react-utils';
import MobileMenuItemSearch from '../../../components/mobile-menu-item-search';

const AgentTeamThirdPartyCGReport = loadComponent({ loader: () => import('../../pages/member-center/agent/team-third-party-cg-report') });

const AgentTeamThirdPartyCGReportWithNavbar1 = {
	component: AgentTeamThirdPartyCGReport,
	title: 'CG报表',
};

const AgentTeamThirdPartyCGReportWithNavbar2 = {
	component: AgentTeamThirdPartyCGReport,
	title: 'CG报表',
	toolbarButtons: {
		rightButtons: [
			{
				id: 'agent-team-third-party-cg-report-advanced-search',
				component: <MobileMenuItemSearch/>,
			}
		],
	},
};

export default {
	AGENT_TEAM_THIRD_PARTY_CG_REPORT_NAVBAR_1: AgentTeamThirdPartyCGReportWithNavbar1,
	AGENT_TEAM_THIRD_PARTY_CG_REPORT_NAVBAR_2: AgentTeamThirdPartyCGReportWithNavbar2,
};
