import React from 'react';

import {
	Icon,
} from 'ljit-react-components';
import MobileLotteryPlayTitle from '../../../features/mobile-lottery-play-title';
import MobileMenuItemOption from '../../../components/mobile-menu-item-option';
import MobilePageTitle from '../../../components/mobile-page-title';

import { getTranslationText, } from '../../../lib/language-utils';

import XinYongBet from '../../pages/xin-yong-bet';

const XinYongBetWithNavbar1 = {
	component: XinYongBet,
	title: (
		<MobilePageTitle
			title={`${getTranslationText('信用')}玩法`}
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

const XinYongBetWithNavbar2 = {
	component: XinYongBet,
	title: (
		<MobileLotteryPlayTitle
			playTitle={`${getTranslationText('信用')}`}
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
	XINYONG_BET_NAVBAR_1: XinYongBetWithNavbar1,
	XINYONG_BET_NAVBAR_2: XinYongBetWithNavbar2,
};
