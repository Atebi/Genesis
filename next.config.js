/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/genesis",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        // permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
