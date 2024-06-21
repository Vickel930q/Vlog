/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"**",
      },
    ],
  },
      // remotePatterns:["cafeu.vercel.app", "img.freepik.com","colorlib.com","images.unsplash.com"], // Add more as needed.
  

  eslint:{
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. It's recommended to enable this option
    // only temporarily until you've addressed all warnings.
    ignoreDuringBuilds: true,
  },
 
};

export default nextConfig;
