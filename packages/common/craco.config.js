const path = require('path');

module.exports = {
  webpack: {
    mode: 'production',
    entry: {
      index: { import: './src/index.js' },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    output: {
      filename: 'components.bundle.min.js',
      library: 'fstrComponents',
      libraryTarget: 'umd',
      clean: true,
    },
  },
  babel: {
    mode: 'production',
    entry: {
      index: { import: './src/index.js' },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    output: {
      filename: 'components.bundle.min.js',
      library: 'fstrComponents',
      libraryTarget: 'umd',
      clean: true,
    },
  },
};
