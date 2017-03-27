module.exports = (ctx) => ({
  parser: false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    cssnano: ctx.env === 'production' ? {} : false
  }
})
