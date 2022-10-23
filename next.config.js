/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "", 
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/', './src/assets/icons/'],
}

module.exports = nextConfig

