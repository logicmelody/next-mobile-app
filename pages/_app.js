import Head from 'next/head';
import { setupIonicReact } from '@ionic/react';

import MobileApp from '../page-components/app';

// 要使用 Ionic 的元件，必須要把 SSR 關掉	
import NonSSRWrapper from '../components/non-ssr-wrapper';

import TestProvider from '../lib/test-provider';

import '@/styles/globals.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			</Head>

			<TestProvider>
				<NonSSRWrapper>
					{/* <Component {...pageProps} /> */}
					<MobileApp />
				</NonSSRWrapper>
			</TestProvider>
		</>
	);
}
