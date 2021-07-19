const { APP_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${APP_URL}/:path*`,
      },
    ]
  },
}
