const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  images: {
    remotePatterns: [{ protocol: "http", hostname: "127.0.0.1" }],
    unoptimized: true
  },
};
