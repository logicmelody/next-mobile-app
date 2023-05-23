import { CapacitorConfig } from '@capacitor/cli';

// Note: iOS 跟 Android device 的 hot reload 要 npm run dev 有把 web app 的 server 跑起來才會運作
const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'next-mobile-app',
	webDir: 'out',
	server: {
		url: 'http://192.168.10.29:3000',
		cleartext: true
	}
};

export default config;
