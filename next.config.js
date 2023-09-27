/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
      },
      {
        source: "/cloudinary/:path*",
        destination: `${process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT}/:path*`,
      },
    ];
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // <https://webpack.js.org/configuration/devtool/> and
    // <https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map>
    // for more information.
    hideSourceMaps: true,
  },
};

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

  org: "329design",
  project: "329design-frontend",

  // An auth token is required for uploading source maps.
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
