const { mergeWithCustomize, unique } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = mergeWithCustomize({
  customizeArray: unique(
    'plugins',
    ['HtmlWebpackPlugin'],
    (plugin) => plugin.constructor && plugin.constructor.name
  ),
});

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'example';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    /* The option below would be necessary if I wasn't using mergeWithCustomize to merge the two instances of HtmlWebpackPlugin */
    // disableHtmlGeneration: true,
  });

  const config = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });

  return config;
};
