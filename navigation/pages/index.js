import { registerPage } from '../../ibear-react-mobile-navigation';

import { NavigationKeyEnums } from '../';

import LayoutRoute from '../../page-components/layout-route';
import Login from '../../page-components/login';
import Settings from '../../page-components/settings';
import SettingsDetail from '../../page-components/settings-detail';
import ThirdPartyGames from '../../page-components/third-party-games';

const {
	LAYOUT_ROUTE,
	LOGIN,
	SETTINGS,
	SETTINGS_DETAIL,
	THIRD_PARTY_GAMES,
} = NavigationKeyEnums;

// 註冊 page
registerPage(LAYOUT_ROUTE, {
	component: LayoutRoute,
});

registerPage(LOGIN, {
	component: Login,
	title: 'LOGIN',
});

registerPage(SETTINGS, {
	component: Settings,
	title: 'SETTINGS',
});

registerPage(SETTINGS_DETAIL, {
	component: SettingsDetail,
	title: 'SETTINGS_DETAIL',
});

registerPage(THIRD_PARTY_GAMES, {
	component: ThirdPartyGames,
	title: 'THIRD_PARTY_GAMES',
});

// 要把所有會作用 page 的 route 宣告成一個 array
const Pages = [
	LAYOUT_ROUTE,
	LOGIN,
	SETTINGS,
	SETTINGS_DETAIL,
	THIRD_PARTY_GAMES,
];

export default Pages;
