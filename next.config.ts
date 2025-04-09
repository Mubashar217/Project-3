/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
<<<<<<< HEAD
};
=======
  webpack: (config) => {
    // اپنی تخصیصات یہاں شامل کریں
    return config;
  },
}

module.exports = nextConfig;
>>>>>>> 1712e57e2e4070e7c2b3b98384a5f390658f2159
