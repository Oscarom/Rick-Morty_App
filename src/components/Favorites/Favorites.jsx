import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div>
      {myFavorites.map((character) => {
        return (
          <div>
            <img alt={character.name} src={character.image} />
            <div>
            <Link to={`/detail/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            </div>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
