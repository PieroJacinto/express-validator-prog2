# TO-DO LIST

## 1
- Instalar express Validator

## 2
-  Crear la carpeta middlewares y 3 archivos: login-validator, register-validator y new-movie-validator

## 3 
- Dentro de cada archivo creado en el punto anterior, requerir express-validator( destructuring body), crear un array de validaciones,. y exportar dicho array. 

## 4
- En el archivo de ruta que correspónda , requerir el modulo creado en middlewares e introducirlo en la ruta correspondiente entre el path y el controllador, separado por comas. (debe ser una ruta de tipo post que maneje el formulario )

## 5 
### Login Validation:
- En el archivo login-validatior, crear las validaciones correspondientes dentro del array.
- Luego en el loginController, requerir los resultados de la validacion (validationResult) de express-validator.
- En el controilador de el formulario de login aplicar las validaciones.
- En el EJS , agregar codigo necesario para mostrar el error.
- En en EJS, tambien agregar codigo necesario para que si el usuario ingreso bien algun input, este se cargue si hay error y no lo tenga q volver a escribir. 

## 6
- Hacer el mismo proceso para REGISTER

## 7 
- Hacer el mismo proceso para CREAR PELICULA









