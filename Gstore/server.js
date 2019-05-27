#!/usr/bin/env node

/**
 * Module dependencies.
 */
var express = require('express');
var config = require("./config/database.js");
var confiig = require("./config/secret.js");
var app = require('./app.js');
var debug = require('debug')('projet:server');
var http = require('http');
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');


var SchemaAdmin = require('./models/Admin');
var Client = require('./models/Client');



var expressValidator = require("express-validator");



process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



/*------------------SMTP Over-----------------------------*/

/*------------------SMTP Over-----------------------------*/

/*------------------SMTP Over-----------------------------*/





//=================================================================================
//          SERVER HTTP
//=================================================================================
/**
 * Get port from environment and store in Express.*/
var port = normalizePort(process.env.PORT || '1337');
app.set('port', port);
/** * Create HTTP server. */
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//=================================================================================
//          SERVER BD
//=================================================================================
// Use native Node promises
var connectionString = process.env.DEBUG === "true" ?
    config.debug.database.connectionString :
    config.database.connectionString;

mongoose.connect(connectionString);

mongoose.connection.on("connected", function () {
    console.log("Connected to " + connectionString);
});

mongoose.connection.on("error", function (error) {

    console.log("Connection to " + connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function () {
    console.log("Disconnected from " + connectionString);
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Disconnected from " + connectionString + " through app termination");
        process.exit(0);
    });
});


//---------------------------------------------------------------------
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}





//////////////////////////////////////METHODES////////////////////////////////
/*------------------ Add new user -----------------------*/
app.post('/AddClient', function (req, res) {

    var newClient = new Client();
        newClient.nom = req.body.nom,
        newClient.prenom = req.body.prenom,
        newClient.tel = req.body.tel,
        newClient.adresse = req.body.adresse,
        newClient.cin = req.body.cin,
        newClient.login = req.body.user,
        newClient.password = newClient.generateHash(req.body.pwd)

    
    newClient.save(function (err) {
        console.log("Client est bien ajouté");

    });
});
/*------------------ Add new admin -----------------------*/
app.post('/AddAdmin', function (req, res) {

    var newAdmin = new SchemaAdmin();
        newAdmin.nom = req.body.nom,
        newAdmin.prenom = req.body.prenom,
        newAdmin.login = req.body.user,
        newAdmin.password = newAdmin.generateHash(req.body.pwd)


    newAdmin.save(function (err) {
        console.log("Admin est bien ajouté");

    });
});

/*------------------ Add new Vehicule -----------------------*/
app.post('/AddVehicule', function (req, res) {

    Vehicule = new SchemaVehicule({

        type: req.body.type,
        marque: req.body.marque,
        matricule: req.body.matricule,
        entreprise: req.body.entreprise,
        device: req.body.device,
        type_moteur: req.body.type_moteur,
        vidange_precedent: req.body.vidange_precedent,
        vidange_suivant: req.body.vidange_suivant,
        kilometrage: req.body.kilometrage

    });

    Vehicule.save(function (err) {
        console.log(" Vehicule ajoutée");
    });

});

/*------------------ Add new Conductor -----------------------*/
app.post('/AddConducteur', function (req, res) {

    Conducteur = new SchemaConducteur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: req.body.date_naissance,
        tel: req.body.tel,
        adresse: req.body.adresse,
        type_permis: req.body.type_permis,
        email: req.body.email

    });
    Conducteur.save(function (err) {
        console.log(" Conducteur ajoutée");
    });

});

/*------------------ Add new Entreprise -----------------------*/
app.post('/AddEntreprise', function (req, res) {

    Entreprise = new SchemaEntreprise({

        nom: req.body.nom,
        tel: req.body.tel,
        adresse: req.body.adresse


    });

    Entreprise.save(function (err) {
        console.log(" Entreprise ajoutée");
    });

});

/*------------------ Add new Role-----------------------*/
app.post('/AddRole', function (req, res) {

    Role = new SchemaRole({
        personnel: req.body.personnel,
        entreprise: req.body.entreprise,
        libelle: req.body.libelle

    });

    Role.save(function (err) {
        console.log(" Role ajouté");
    });

});

/*------------------ Add new Affectation-----------------------*/
app.post('/AddAffectation', function (req, res) {

    Affectation = new SchemaAffectation({

        conducteur: req.body.conducteur,
        vehicule: req.body.vehicule,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin

    });

    Affectation.save(function (err) {
        console.log(" Affectation ajouté");
    });

});

/********************get all users**********************/
app.get('/AllUsers', function (req, res) {

    SchemaPersonne.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});
app.get('/AllAffectation', function (req, res) {

    SchemaAffectation.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});

app.get('/AllEntreprises', function (req, res) {

    SchemaEntreprise.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});

app.get('/AllRoles', function (req, res) {

    SchemaRole.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});

app.get('/AllConductors', function (req, res) {

    SchemaConducteur.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});

app.get('/AllVehicules', function (req, res) {

    SchemaVehicule.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});

app.get('/AllPersonnels', function (req, res) {

    SchemaPersonnel.find()

        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });

});
/********************get all Models BY ID**********************/
app.get('/ShowEntrepriseById/:id', function (req, res) {
    SchemaEntreprise.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});
app.get('/ShowPersonnelById/:id', function (req, res) {
    SchemaPersonnel.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});
app.get('/ShowAffectationById/:id', function (req, res) {
    SchemaAffectation.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});
app.get('/ShowConducteurById/:id', function (req, res) {
    SchemaConducteur.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});

app.get('/ShowRoleById/:id', function (req, res) {
    SchemaRole.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});

app.get('/ShowVehiculeById/:id', function (req, res) {
    SchemaVehicule.find({ _id: req.params.id })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data);
        });
});

// ***************************************** Client LOGIN PROCESS *******************************************
app.post('/login', function (req, res, next) {
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    Client.findOne({ "login": req.body.login }, function (err, client) {
        if (!client) return res.status(401).send({ success: false, message: 'Le login  "' + req.body.login + '"  est errone, Reessayez.' });

        if (!client.validPassword(req.body.password)) {
            return res.status(403).send({ success: false, message: 'Mot de passe errone.' });
        };

        //if (!admin.isVerified) return res.status(401).send({ type: 'not-verified', message: 'Your account has not been verified.' });

        var clientData = { "nom": client.nom };
        var token = jwt.sign(clientData, confiig.secret.value, { expiresIn: 3600 /* expires in 1 minute*/ });
        ClientTokenData = { "token": token };
        res.json(ClientTokenData);

        // req.session.admin = admin;
    });
});

// ***************************************** Admin LOGIN PROCESS *******************************************
app.post('/loginAdmin', function (req, res, next) {
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    SchemaAdmin.findOne({ "login": req.body.login }, function (err, admin) {
        if (!admin) return res.status(401).send({ success: false, message: 'Le login  "' + req.body.login + '"  est errone, Reessayez.' });

        if (!admin.validPassword(req.body.password)) {
            return res.status(403).send({ success: false, message: 'Mot de passe errone.' });
        };

        //if (!admin.isVerified) return res.status(401).send({ type: 'not-verified', message: 'Your account has not been verified.' });

        var adminData = { "nom": admin.nom };
        var token = jwt.sign(adminData, confiig.secret.value, { expiresIn: 3600 /* expires in 1 minute*/ });
        AdminTokenData = { "token": token };
        res.json(AdminTokenData);

        // req.session.admin = admin;
    });
});
// ================================ Delete Method=======================
app.post('/DeletePersonnel', function (req, res, next) {

    SchemaPersonnel.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});
app.post('/DeleteEntreprise', function (req, res, next) {

    SchemaEntreprise.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});
app.post('/DeleteConducteur', function (req, res, next) {

    SchemaConducteur.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});
app.post('/DeleteVehicule', function (req, res, next) {

    SchemaVehicule.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});
app.post('/DeleteRole', function (req, res, next) {

    SchemaRole.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});
app.post('/DeleteAffectation', function (req, res, next) {

    SchemaAffectation.remove({ _id: req.body.id }
        , function (err) {
            if (err) return handleError(err);
            console.log("supprimé");
        });

});

//*************************UPDATE Methods**********************************************************
app.post('/UpdateEntreprise', function (req, res) {
    SchemaEntreprise.findByIdAndUpdate(req.body.id, { nom: req.body.nom, tel: req.body.tel, adresse: req.body.adresse },
        function (err) {
            if (err) console.log("non modfiée");
            console.log("Entreprise modfiée");
        });
})
app.post('/UpdatePersonnel', function (req, res) {
    SchemaPersonnel.findByIdAndUpdate(req.body.id, { nom: req.body.nom, prenom: req.body.prenom, date_naissance: req.body.date_naissance, tel: req.body.tel, adresse: req.body.adresse, email: req.body.email, date_embauche: req.body.date_embauche, salaire: req.body.salaire },
        function (err) {
            if (err) console.log("non modfiée");
            console.log("Personnel modfié");
        });
})
app.post('/UpdateAffectation', function (req, res) {
    SchemaAffectation.findByIdAndUpdate(req.body.id, { conducteur: req.body.conducteur, vehicule: req.body.vehicule, date_debut: req.body.date_debut, date_fin: req.body.date_fin },
        function (err) {
            if (err) console.log("non modfiée");
            console.log("Affectation modfiée");
        });
})
app.post('/UpdateConducteur', function (req, res) {
    SchemaConducteur.findByIdAndUpdate(req.body.id, { nom: req.body.nom, prenom: req.body.prenom, date_naissance: req.body.date_naissance, tel: req.body.tel, adresse: req.body.adresse, type_permis: req.body.type_permis, email: req.body.email },
        function (err) {
            if (err) console.log("non modfié");
            console.log("Conducteur modfié");
        });
})

app.post('/UpdateRole', function (req, res) {
    SchemaRole.findByIdAndUpdate(req.body.id, { personnel: req.body.personnel, entreprise: req.body.entreprise, libelle: req.body.libelle },
        function (err) {
            if (err) console.log("non modfié");
            console.log("Role modfié");
        });
})

app.post('/UpdateVehicule', function (req, res) {
    SchemaVehicule.findByIdAndUpdate(req.body.id, { type: req.body.type, marque: req.body.marque, matricule: req.body.matricule, entreprise: req.body.entreprise, device: req.body.device, type_moteur: req.body.type_moteur, vidange_precedent: req.body.vidange_precedent, vidange_suivant: req.body.vidange_suivant, kilometrage: req.body.kilometrage },
        function (err) {
            if (err) console.log("non modfié");
            console.log("Role modfié");
        });
})

