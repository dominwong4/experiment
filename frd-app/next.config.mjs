import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ['placebear.com'],
  },
};

export default withNextIntl(nextConfig);