/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
 
  basePath: process.env.NEXT_PUBLIC_API_URL,


};

export default nextConfig;
