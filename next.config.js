/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-test-me',
            value: 'works',
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
