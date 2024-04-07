/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	experimental: {
		images: {
			unoptimized: true
		}
	},
	images: {
		loader: 'akamai',
		path: '',
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://rnft-api.reichain.io/:path*' // Proxy to Backend
			}
		]
	}
};

module.exports = nextConfig;
