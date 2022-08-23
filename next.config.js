/** @type {import('next').NextConfig} */

//there should only be one module.exports
module.exports = {
  reactStrictMode: true,
  env: {
    IMP_UID: process.env.IMP_UID,
    CLIENT_URL: process.env.CLIENT_URL,
    RUNTIME_ENV: process.env.RUNTIME_ENV,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
