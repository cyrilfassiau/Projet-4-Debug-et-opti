module.exports = {
    plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './*.html',  // Vérifie les classes dans les fichiers HTML
          './assets/bootstrap/bootstrap.bundle.min.js'  // Vérifie les classes dans les fichiers JS
        ],
        safelist: {
          standard: [
            'active', 'show', 'collapse', 'collapsing', 'fade', 'modal', 'tooltip', 'dropdown', 'alert',
            'item-column', 'mb-4', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4', 'gallery-items-row', 'row' // Ajoute tes classes ici
          ]
        },
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  };
  