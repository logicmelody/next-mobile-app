import React from 'react';

import {
	Icon,
} from 'ljit-react-components';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemOption from '../../../components/mobile-menu-item-option';
import MobilePageTitle from '../../../components/mobile-page-title';

import StandardBet from '../../pages/standard-bet';

const StandardBetWithNavbar1 = {
	component: StandardBet,
	title: (
		<MobilePageTitle
			title='投注'
			icon={(
				<Icon
					type={Icon.IconTypeEnums.CARET_DOWN}
					size={Icon.SizeEnums.X_SMALL}
				/>
			)}
		/>
	),
	toolbarButtons: {
		rightButtons: [
			{
				id: 'action-sheet',
				icon: 'action-sheet',
				component: <MobileMenuItemOption />,
			}
		],
	},
};

const StandardBetWithNavbar2 = {
	component: StandardBet,
	title: (
		<MobileLotteryPlayTitle
			playTitle='官方'
		/>
	),
	toolbarButtons: {
		rightButtons: [
			{
				id: 'action-sheet',
				icon: 'action-sheet',
				component: <MobileMenuItemOption />,
			}
		],
	},
};

export default {
	STANDARD_BET_NAVBAR_1: StandardBetWithNavbar1,
	STANDARD_BET_NAVBAR_2: StandardBetWithNavbar2,
};
