/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.annihil.us"],
  },
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
