const bcrypt = require('bcryptjs');
const db = require('../database/models');
//requerimos express validator y validationResult:


const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        //Mostramos el form de login
        return res.render('login');
    },
    login: function(req, res){
        //obtenemos los restultados de las validaciones       
        
        // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body         
      
        // Buscamos el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( function ( user ) {
            //Seteamos la session con la info del usuario
            req.session.user = user;          
            //Si tildó recordame => creamos la cookie.
            if(req.body.rememberme != undefined){
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
            }
            return res.redirect('/');            
        })
        .catch( function(e) {
            console.log(e)
        })
    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
         res.clearCookie('userId');
        
        //redireccionar a hone
        return res.redirect('/')
    }
    
}

module.exports = loginController;