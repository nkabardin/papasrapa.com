module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  // Exclude directories with spaces in their names from the build process
  webpack: (config) => {
    // Exclude the "screenings map" directory from webpack processing
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/, /screenings map/],
        use: []
      });
    }
    return config;
  },
  // Exclude the "screenings map" directory from file tracing
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/screenings map/**', '**/node_modules/**']
    }
  }
};
