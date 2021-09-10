const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
      },
      mode: 'development'
  };

  module.exports = config;