$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
const express = require('express');
const compression = require('compression');
const app = express();

// Active la compression Gzip pour tout le site
app.use(compression());

// Sert tes fichiers statiques
app.use(express.static('public'));

// Démarre le serveur
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});