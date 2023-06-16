import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div>
      {character.name ? <h1>{character.name}</h1> : null}
      {character.status ? <h2>{character.status}</h2> : null}
      {character.species ? <h2>{character.species}</h2> : null}
      {character.gender ? <h2>{character.gender}</h2> : null}
      {character.origin ? <h2>{character.origin.name}</h2> : null}
      {character.image ? <img src={character.image} alt={character?.name} /> : null}
    </div>
  );
// return(
//     <div>  
//         <h1>{character?.name}</h1>
//         <h2>{character?.status}</h2>
//         <h2>{character?.species}</h2>
//         <h2>{character?.gender}</h2>
//         <h2>{character?.origin?.name}</h2>
//         <img src={character?.image} alt={character?.name} />
//     </div>
// )
}
