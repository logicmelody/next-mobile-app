/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@ionic/react',
		'@ionic/react-router',
		'@ionic/core',
		'@stencil/core',
		'ionicons'
	],

	// NOTE: https://github.com/ionic-team/ionic-framework/issues/27265
	reactStrictMode: false,
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
