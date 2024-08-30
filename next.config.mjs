/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    prependData: `@import "/src/style/_variables.scss";
       @import "/src/style/_mixins.scss";`,
  },
};

export default nextConfig;
