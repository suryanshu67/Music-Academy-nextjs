import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
     // ✅ Disable ESLint during Vercel builds
     ignoreDuringBuilds: true,
    }  
};

export default nextConfig;
