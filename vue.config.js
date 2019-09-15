// vue.config.js
module.exports = {
  outputDir: 'build',
  publicPath: './',
  chainWebpack: (config) => {
    // 最小化处理: 代码的最优化
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
        chunks: 'all',
    });
    // 忽略这些模块的打包
    config.externals({
        vue: 'Vue',
        'element-ui': 'ELEMENT',
    });
  },
}
