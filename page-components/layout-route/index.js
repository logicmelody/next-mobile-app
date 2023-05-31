import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NavigationKeyEnums } from '../../navigation';

const {
	TAB1,
} = NavigationKeyEnums;

const propTypes = {
	onNavigate: PropTypes.func.isRequired,
};

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

LayoutRoute.propTypes = propTypes;

export default LayoutRoute;
