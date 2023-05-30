import { NavigationKeyEnums } from '../';

import LayoutRoute from '../../page-components/layout-route';
import Login from '../../page-components/login';
import Settings from '../../page-components/settings';
import Tabs from '../../page-components/tabs';
import ThirdPartyGames from '../../page-components/third-party-games';

const {
	LAYOUT_ROUTE,
	LOGIN,
	SETTINGS,
	TABS,
	THIRD_PARTY_GAMES,
} = NavigationKeyEnums;

const pages = [
	{
		path: LAYOUT_ROUTE,
		component: LayoutRoute,
	},
	{
		path: LOGIN,
		component: Login,
		title: 'LOGIN',
	},
	{
		path: SETTINGS,
		component: Settings,
		title: 'SETTINGS',
	},
	{
		path: TABS,
		component: Tabs,
	},
	{
		path: THIRD_PARTY_GAMES,
		component: ThirdPartyGames,
		title: 'THIRD_PARTY_GAMES',
	},
];

export default pages;
