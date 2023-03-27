/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/search/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteEntry.js',
      exposes: {
        './SearchApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
