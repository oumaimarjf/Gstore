var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ClientSchema = new mongoose.Schema({
    nom: { type: String },
    prenom: { type: String },
    tel: { type: String },
    adresse: { type: String },
    cin: { type: String },
    login: { type: String },
    password: { type: String }

});
// methods ======================
// generating a hash
ClientSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
ClientSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};



module.exports = mongoose.model('Client', ClientSchema);