/* Esta pagina lo que hace es que cuando hago click sobre el nombre en una Card esta nos redirige a la ruta con el ID del personaje.

Este es el componente que muestra toda la información del personaje. */



import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function Detail() {
   
   /* obtengo el ID del personaje mediante **useParams** 
   para ello uso la destructuring y el hook de la siguiente forma:

   */

  const {detailId} = useParams();

  const navigate = useNavigate()

  /* creo un estado local para el character */

  const [character, setCharacter]= useState({});


 /*  Este código es de una promesa es el cual buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información. 
 esto se ve a mayor profundidad en el m3
 */
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

 const handleClick = ()=>{
   navigate('/home')
 }
  return (
      <div>
         <button onClick={handleClick}>GO Home</button>
        {/*  ejercicio 6 de routing */}
       {character? (
         <div>
            <div>
               <h5>{character.name}</h5>
               <h5>{character.status}</h5>
               <h5>{character.species}</h5>
               <h5>{character.gender}</h5>
               <h5>{character.origin?.name}</h5>
            </div>
            <div>
               <img src={character.image} alt={character.name}/>
            </div>
         </div>
       ) : (
         ""
       )}
      </div>
  )
      
}
export default Detail