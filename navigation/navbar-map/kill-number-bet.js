import React from 'react';

import {
	Icon,
} from 'ljit-react-components';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemOption from '../../../components/mobile-menu-item-option';
import MobilePageTitle from '../../../components/mobile-page-title';

import { getTranslationText, } from '../../../lib/language-utils';

import KillNumberBet from '../../pages/kill-number-bet';

const KillNumberBetWithNavbar1 = {
	component: KillNumberBet,
	title: (
		<MobilePageTitle
			title={`${getTranslationText('做号')}`}
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
				component: <MobileMenuItemOption/>,
			}
		],
	},
};

const KillNumberBetWithNavbar2 = {
	component: KillNumberBet,
	title: (
		<MobileLotteryPlayTitle
			playTitle={`${getTranslationText('做号')}`}
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
	KILL_NUMBER_BET_NAVBAR_1: KillNumberBetWithNavbar1,
	KILL_NUMBER_BET_NAVBAR_2: KillNumberBetWithNavbar2,
};
