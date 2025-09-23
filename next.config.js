module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingIgnores: {
    '*': ['**/screenings map/**']
  },
  webpack: (config) => config, // no watchOptions in CI
};
