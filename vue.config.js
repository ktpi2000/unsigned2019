module.exports = {
    devServer: {
      port: 3000,
      disableHostCheck: true
    },
    pwa: {
      workboxOptions: {
        skipWaiting: true
      }
    }
  };