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
  env: {
    NEXTAUTH_SECRET:
      "tC1ojz82cyhCQ+2bvaDtXywev3Wt5XqYpd3HSl2KI9AeGAnuKva5IDsZ+pYpwHg2VomPAX3d2E+gnlCtj17HtByTQ9/gjDFvuXj98DLTDKDn7J93qKt916PzBjArsRqfhrgICT7Trzj2xVW+Y6DrjDvaAdOcN6HAGEFnl7D5+aSe8xxBRowRKmr3+pw2+l0VWhI1gRFNyznov/NcEOzGwGIH8L0X1uqAj+NSJiRXrdP3ilyjTS1156NyuqeJZ+0+1dzxHb62fpISQ7WUGLLpwKiyDhlhdTfneiNSnkexHjEll8oRsNcW6IDeRduxIa1hXpiS9Emu+toPGw6uYjQCAg==",
  },
};

export default nextConfig;
