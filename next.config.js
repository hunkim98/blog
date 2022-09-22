/** @type {import('next').NextConfig} */

//there should only be one module.exports
module.exports = {
  reactStrictMode: true,
  env: {
    // remember that you should update env in .github/workflow/gh-pages.deploy.yml
    RUNTIME_ENV: process.env.RUNTIME_ENV,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
