/** @type {import('next').NextConfig} */

//there should only be one module.exports
module.exports = {
  reactStrictMode: true,
  env: {
    RUNTIME_ENV: process.env.RUNTIME_ENV,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
