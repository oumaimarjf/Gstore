var mongoose = require('mongoose');


var ProduitSchema = new mongoose.Schema({
    libelle: { type: String },
    description: { type: String },
    editeur: { type: String },
    developpeur: { type: String },
    prix: { type: String },
    date: { type: String },
    categorie: { type: String },
    image: { type: GridFs}

});

module.exports = mongoose.model('Produit', ProduitSchema);