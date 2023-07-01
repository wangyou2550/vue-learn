
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost:31152',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
