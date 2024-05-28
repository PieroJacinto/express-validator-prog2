const bcrypt = require('bcryptjs');
const db = require('../database/models');
//requerimos express validator y validationResult:


let registerController = {
    index: function (req, res) {
        //Mostrar el formulario de registro
        return res.render('register');
    },
    store: function (req, res) {
         //obtenemos los restultados de las validaciones
         
         // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body
         

        // Guardar un usuario en la db
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10), 
        };
        //creamos el usuario
        db.User
            .create(user)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    },

};
module.exports = registerController;