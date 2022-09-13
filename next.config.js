/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments'
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org']
  }
})
