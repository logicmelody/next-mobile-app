import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Share } from '@capacitor/share';
import {
	IonButton,
} from '@ionic/react';

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
			{/* <IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Tab 12323</IonTitle>
					</IonToolbar>
				</IonHeader> */}

			<IonButton onClick={() => {
				share();
			}}>
				Share
			</IonButton>

			<h1>Test top</h1>
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
