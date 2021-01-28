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
    devServer: {
      onListening: ({ compiler }) => {
        const { https, client } = compiler.options.devServer;
        const { publicPath, filename } = compiler.options.output;
        const protocol = https ? 'https://' : 'http://';
        const port = !client.port ? '' : `:${client.port}`;
        const path = ['', 'auto'].includes(publicPath) ? '/' : publicPath;
        console.log(
          `⚡️ single-spa root-config URL: ${protocol}${client.host}${port}${path}${filename}`
        );
      },
    },
  });

  return config;
};
