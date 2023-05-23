/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@ionic/react',
		'@ionic/react-router',
		'@ionic/core',
		'@stencil/core',
		'ionicons'
	],
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
