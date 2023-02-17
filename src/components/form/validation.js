/* 
Este componente realiza la validacion de los formatos y requerimientos del username y del password

   **USERNAME**

-  el nombre de usuario tiene que ser un email _(explora validaciónes REGEX en internet!)_.
-  el nombre de usuario no puede estar vacío.
-  el nombre de usuario no puede tener más de 35 caracteres.

**PASSWORD**

-  la contraseña tiene que tener al menos un número.
-  la contraseña tiene que tener una longitud entre 6 y 10 caracteres. */


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;


export function validation(userData){
  
    let errors={}
    // se testea la propiedad userData.username con la regexEmail, sino coincide tira el error
    if(!regexEmail.test(userData.username)) errors.username = "El usuario debe ser un email"
    if(!userData.username) errors.username = "El usuario no puede estar vacio"
    if(userData.username.length > 35) errors.username = "El usuario no puede ser mayor a 35 caracteres"
    if(!regexPassword.test(userData.password)) errors.password = "La contraseña debe tener al menos un numero"
    if(userData.password.length<6 && userData.password>10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    return errors;
}

