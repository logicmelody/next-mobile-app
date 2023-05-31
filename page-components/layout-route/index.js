import { useEffect, useState } from 'react';

import { NavigationKeyEnums } from '../../navigation';

const {
	TAB1,
} = NavigationKeyEnums;

function LayoutRoute({
	onNavigate,
}) {
	const [isAuthed, setIsAuthed] = useState(false); 

	useEffect(() => {
		console.log('LayoutRoute didMount');

		setTimeout(() => {
			setIsAuthed(true);

		}, 2000);

		return () => {
			console.log('LayoutRoute unMount');
		};

	}, []);

	useEffect(() => {
		if (isAuthed) {
			onNavigate({
				page: TAB1,
				navigationType: 'replace',
			})
		}

	}, [isAuthed, onNavigate]);

	return null;
}

export default LayoutRoute;
