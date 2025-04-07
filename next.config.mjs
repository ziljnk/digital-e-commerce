/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"firebasestorage.googleapis.com",
			"img.clerk.com",
			"images.unsplash.com",
			"api.microlink.io",
		],
	},
};

export default nextConfig;
