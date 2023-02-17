import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions";


export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <div className={styles.flex}>
        {/* se pasa la funcion onClose al evento onClick del boton close */}

        <button className={styles.buttonClose} onClick={props.onClose}>
          X
        </button>
      </div>

      {/* renderizo las props que me traje con la funcion Cards */}

      {/* le paso el argumento (props.id) al parametro declarado al crear la ruta en App( <Route path="/detail/:detailId" element={<Detail />}  para que me dirija a esa ruta dinamicamente */}

      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>

      <h2>{props.species}</h2>

      <h2>{props.gender}</h2>

      <img alt={props.name} src={props.image} />
    </div>
  );
}
