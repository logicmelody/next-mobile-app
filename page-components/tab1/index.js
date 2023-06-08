import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Share } from '@capacitor/share';
import {
	IonButton,
} from '@ionic/react';

import {
	StyledTopContainer,
} from './styles';

import NextImage from '../../public/images/next.svg';

const propTypes = {
	onRenderToolbarTitle: PropTypes.func.isRequired,
};

function Tab1Page({
	onRenderToolbarTitle,
}) {
	useEffect(() => {
		onRenderToolbarTitle((
			<IonButton onClick={() => {
				console.log('Click Tab1Page Title');
			}}>
				Tab1Page Title
			</IonButton>
		));

	}, [onRenderToolbarTitle]);

	const share = async () => {
		await Share.share({
			title: 'Simons YT Channel',
			text: 'Learn to build awesome mobile apps!',
			url: 'https://www.youtube.com/simongrimmdev_',
			dialogTitle: 'Share with friends'
		})
			.then(() => console.log('Successful share'))
			.catch((error) => console.log('Error sharing', error));
	};

	return (
		<>
			<StyledTopContainer>
				<IonButton onClick={() => {
					share();
				}}>
					Share
				</IonButton>

				<Image
					src={NextImage}
					width='64'
					height='64'
					alt='Picture of the author'
				/>

				<h1>Test top</h1>
			</StyledTopContainer>

			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
			<h1>Test</h1>
		</>
	);
}

Tab1Page.propTypes = propTypes;

export default Tab1Page;
