/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/resources/scss')],
  },
  // disable css-modules component styling
  // webpack(config) {
  //   config.module.rules.forEach((rule) => {
  //     const { oneOf } = rule;
  //     if (oneOf) {
  //       oneOf.forEach((one) => {
  //         if (!`${one.issuer?.and}`.includes('_app')) return;
  //         one.issuer.and = [path.resolve(__dirname)];
  //       });
  //     }
  //   })
  //   return config;
  // },
}

module.exports = nextConfig
