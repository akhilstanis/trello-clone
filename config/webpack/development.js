const environment = require('./environment')

const merge = require('webpack-merge')
const customConfig = {
  devtool: 'cheap-module-source-map'
}

module.exports = merge(environment.toWebpackConfig(), customConfig)
