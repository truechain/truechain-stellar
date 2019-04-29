const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('svg-icon', resolve('src/components/common/svg'))
      .set('common', resolve('src/components/common'))
      .set('static', resolve('public'))
  }
}
