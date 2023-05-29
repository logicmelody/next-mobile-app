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
		PageComponent: LayoutRoute,
	},
	{
		path: LOGIN,
		PageComponent: Login,
	},
	{
		path: SETTINGS,
		PageComponent: Settings,
	},
	{
		path: TABS,
		PageComponent: Tabs,
	},
	{
		path: THIRD_PARTY_GAMES,
		PageComponent: ThirdPartyGames,
	},
];

export default pages;
