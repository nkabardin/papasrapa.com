module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  // Exclude directories with spaces in their names from the build process
  webpack: (config, { isServer }) => {
    // Exclude the "screenings map" directory
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/**', '**/screenings map/**']
    };
    return config;
  },
};
