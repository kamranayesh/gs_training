const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),// output folder bane (dist/build)
    filename: 'bundle.js', // output filename
  },
  mode: "production",
};