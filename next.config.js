/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();
const nextConfig = {
  images: {
    domains: ["i.annihil.us"],
  },
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
};

module.exports = nextConfig;
