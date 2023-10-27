/** @type {import('next').NextConfig} */

//there should only be one module.exports
module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  env: {
    // remember that you should update env in .github/workflow/gh-pages.deploy.yml
    RUNTIME_ENV: process.env.RUNTIME_ENV,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
};
