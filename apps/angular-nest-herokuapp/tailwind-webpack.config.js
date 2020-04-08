module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss')(
              'apps/angular-nest-herokuapp/tailwind.config.js'
            ),
            require('autoprefixer')
          ]
        }
      }
    ]
  }
};
