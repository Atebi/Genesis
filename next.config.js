/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/genesis",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/genesis/home",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
