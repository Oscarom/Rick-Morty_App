import Card from '../card/Card';
import styles from "./Cards.module.css";


export default function Cards(props) {

   // me traigo de las props el arreglo characters y la funcion onClose de App

   const { characters, onClose } = props;
   //console.log(characters)

   return <div className={styles.container}>
      {
         /* mapeo el arreglo characters y por cada char(character) renderizo una Card */
      
         characters.map((char) => {

          /* paso por props de cada char(character) el name, species,gender e image
          y la funcion onClose */
          
            return <Card
               key={char.id}
               id={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               onClose={() => onClose(char.id)} />;
         })
      }
   </div>;
}
