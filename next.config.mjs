import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.jsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale(es|en)/:page(about|experience|projects|contact)",
        destination: "/:locale",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
