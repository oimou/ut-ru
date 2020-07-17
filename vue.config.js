module.exports = {
    chainWebpack: config => {
      config.module
        .rule('tsv')
        .test(/\.tsv$/)
        .use('csv-loader')
          .loader('csv-loader')
          .options({
              header: true
          })
          .end()
    }
  }