import { useEffect } from 'react';

import { NavigationKeyEnums } from '../../navigation';

const {
	TAB1,
} = NavigationKeyEnums;

function LayoutRoute({
	onNavigate,
}) {
	useEffect(() => {
		console.log('LayoutRoute didMount');

		setTimeout(() => {
			onNavigate({
				page: TAB1,
				navigationType: 'replace',
			})

		}, 3000);

		return () => {
			console.log('LayoutRoute unMount');
		};

	}, []);

	return null;
}

export default LayoutRoute;
