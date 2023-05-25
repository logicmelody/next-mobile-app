/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@ionic/react',
		'@ionic/react-router',
		'@ionic/core',
		'@stencil/core',
		'ionicons'
	],

	// NOTE:
	// https://github.com/ionic-team/ionic-framework/issues/27265
	// https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
