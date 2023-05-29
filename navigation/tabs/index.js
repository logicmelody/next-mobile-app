import { getProductConfigs } from '../../../product-configs/utils.js';
import getMobileTabImage from '../../../images/mobile-tabs';
import {
	NavigationKeyEnums
} from '../';

const configs = getProductConfigs();
const { MobileTabs: MobileTabsConfig } = configs;

const { MobileTabs, TabIndexEnums } = MobileTabsConfig;

const TabKeyEnums = {
	HOME: 'home',
	HOME2: 'home2',
	DRAWINGS: 'drawings',
	ATM: 'atm',
	CHAT: 'chat',
	MEMBER_CENTER: 'member-center',
};

function getPageObject(tabKey) {
	switch (tabKey) {
		case TabKeyEnums.HOME:
			return {
				page: NavigationKeyEnums.HOME,
				icon: 'md-home',
			};

		case TabKeyEnums.HOME2:
			return {
				page: NavigationKeyEnums.HOME2,
				icon: 'md-home',
			};

		case TabKeyEnums.DRAWINGS:
			return {
				page: NavigationKeyEnums.DRAWINGS,
				icon: 'fa-file',
			};

		case TabKeyEnums.ATM:
			return {
				page: NavigationKeyEnums.ATM,
				icon: 'fa-file',
			};

		case TabKeyEnums.MEMBER_CENTER:
			return {
				page: NavigationKeyEnums.MEMBER_CENTER,
				icon: 'fa-file',
			};

		case TabKeyEnums.CHAT:
			return {
				page: NavigationKeyEnums.CHAT,
				icon: 'md-home',
			};


		default:
			return {
				page: NavigationKeyEnums.HOME,
				icon: 'md-home',
			};
	}
}

export { TabIndexEnums };

export default MobileTabs.map(item => {
	const {
		label,
		key,
		isRootPage,
		tabIconType,
		normalIconKey,
		selectedIconKey,
	} = item;

	return {
		...getPageObject(key),
		label,
		isRootPage,
		tabIconType,
		imageIcons: {
			normalIcon: getMobileTabImage(normalIconKey),
			selectedIcon: getMobileTabImage(selectedIconKey),
		},
	};
});
