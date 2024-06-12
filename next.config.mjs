/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["flagcdn.com"], // Agrega el dominio 'flagcdn.com' a la lista de dominios permitidos
  },
};

export default nextConfig;
