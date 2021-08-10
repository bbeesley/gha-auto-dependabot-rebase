const path = require('path');

module.exports = {
  mode: 'development', // "production" | "development" - Chosen mode tells webpack to use its built-in optimizations accordingly. Production will result in less readable output
  entry: {
    main: './src/main.ts',
  },
  externalsPresets: {
    node: true, // don't try to include node buildins
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'], // list of file extensions you want to allow into the bundle
  },
  output: {
    libraryTarget: 'commonjs2', // only supported module type for node
    path: path.join(__dirname, 'dist'), // what folder to output compile bundle to
    filename: '[name].cjs', // name of the main bundle entry point
  },
  optimization: {
    concatenateModules: true, // concatenate multiple modules into a single one
    emitOnErrors: true, // emit output files even if there are build errors
    nodeEnv: 'production', // value of process.env.NODE_ENV inside of modules
    usedExports: true, // determine which exports are used by modules and remove the unused ones
    sideEffects: true, // skip modules that are side effect free when using reexports
  },
  target: 'node', // replace module requires with syntax to work in node
  stats: 'minimal', // tells webpack to show a summary of what files it created
  devtool: false, // tells webpack to create source maps, set to false if you're only using the compiled code in stuff that doesn't support source maps (eg a lambda or a docker container)
  cache: true, // disable/enable caching - might want to turn this off for smaller projects where it's already fast
  performance: {
    hints: 'warning', // error if the bundle gets huge
    maxAssetSize: 1e7, // 10 MB, AWS console size limit
  },
  module: {
    // this block defines rules for how we process different file types in different locations
    rules: [
      {
        // Include ts and js files for this loader
        test: /\.(ts|js)$/,
        use: [
          {
            loader: 'cache-loader', // first check the cache to see if we already processed this file
            options: {
              cacheDirectory: path.resolve('.webpackCache'), // where to keep the cache
            },
          },
          'babel-loader', // if not cached, use babel to process the file
        ],
      },
    ],
  },
};
