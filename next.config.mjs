/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
 
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,


};

export default nextConfig;
