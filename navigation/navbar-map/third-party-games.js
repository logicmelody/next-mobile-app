import React from 'react';

import MobileMenuItemWallet from '../../../features/mobile-menu-item-wallet';
import ThirdPartyGames from '../../pages/third-party-games';

const ThirdPartyGamesWithNavbar1 = {
	component: ThirdPartyGames,
};

const ThirdPartyGamesWithNavbar2 = {
	component: ThirdPartyGames,
	toolbarButtons: {
		rightButtons: [
			{
				id: 'wallet',
				icon: 'fa-wallet',
				component: <MobileMenuItemWallet />,
			}
		],
	},
};

export default {
	THIRD_PARTY_GAMES_NAVBAR_1: ThirdPartyGamesWithNavbar1,
	THIRD_PARTY_GAMES_NAVBAR_2: ThirdPartyGamesWithNavbar2,
};
