import { useState } from "react";
import styles from "./searchBar.module.css";

//creo la funcion SearchBar la cual recibira props

export default function SearchBar(props) {
  // por medio de destructuring me traigo la funcion onSearch de los props que recibimos del componente Nav.
  const { onSearch } = props;

  // declaro un estado para character iniciandolo en un strig vacio
  const [character, setCharacter] = useState("");

  //mediante una funcion manejadora, recibo el target value, del evento onchange del componente input
  //y mediante la funcion setCharacter lo guardo en la constante character
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  //retorno lo que se renderizará

  return (
    <div className={styles.barra}>
      
      <input
     /*    renderizo un input y establezco su value con el character
        y le paso la funcion handleChange */
        className={styles.input}
        type="search"
        value={character}
        onChange={handleChange}
      />
      {/* pasamos la funcion onSearch del character(id) al hacer clic en el boton*/}
      <button 
       className={styles.button} 
       onClick={() => onSearch(character)}>
       Agregar
      </button>
    </div>
  );
}
