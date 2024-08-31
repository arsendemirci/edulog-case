/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    prependData: `@import "/src/style/_variables.scss";
       @import "/src/style/_mixins.scss";`,
  },
  // env: {
  //   NEXTAUTH_SECRET: "B0si49v3XOb92VY8RUfPsbeLiB6BdkdNIkvRjdqJyVg=",
  //   NEXTAUTH_URL: "http://localhost:3001/api/auth",
  // },
};

export default nextConfig;
