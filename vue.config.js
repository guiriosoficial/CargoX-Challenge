process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  css: {
    sourceMap: true,
    requireModuleExtension: true
  },

  pwa: {
    name: 'CargoX Challenge',
    themeColor: '#003E69',
    msTileColor: '#003E69',
    manifestOptions: {
      background_color: '#003E69'
    }
  }
}