/* Esta componente es el formulario para logearte en la aplicacion */


import React from "react";
import { validation } from "./validation";



function Form(props) {

  /* creamos un estado que almacenará el usuario y contraseña del user */

  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  /* creamos un estado que almacenará los errores en el username o en el password si es que existen */

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

 /*   creamos la funcion que manejara los inputs la cual recibe el objeto "evento" de estos como parametro*/
 
  function handleInputChange(e) {
 
    /* con la siguiente sintaxis seteo dinamicamente el estado del UserData, user y password */

    setUserData({ ...userData, [e.target.name]: e.target.value });


   /* con la siguiente sintaxis y con la funcion validation que importe arriba, reviso dinamicamente
      si existe un error en user o en el password
   */

    setErrors(validation({...userData, [e.target.name]:e.target.value}))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Ingrese el usuario"

        /* conecto el estado local userData con los inputs correspondientes utilizando la propiedad `value` */
        value={userData.username}

        /* paso la funcion handleInputChange como evento onChange */
        onChange={handleInputChange}
      />
 
       {/* renderizo los errores en un p, en la validacion de username si es que existen */}
      <p>{errors.username}</p>
    
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="Ingrese el password"
        name="password"

        /* conecto el estado local userData de password con el input correspondiente utilizando la propiedad `value` */
        /* value={userData.password} */

       /* paso la funcion handleInputChange como evento onChange */
        onChange={handleInputChange}
      />

      {/* renderizo los errores en un p, en la validacion de password si que que existen */}
      <p>{errors.password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
