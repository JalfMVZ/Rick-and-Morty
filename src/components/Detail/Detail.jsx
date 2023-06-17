import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

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
    <div className = 'DetailPadre'>
      <div className="Detail">
        <img src={character?.image} alt="" className="Img" />
        <div className="CartaDetail">
          <h2 className="Name">{character?.name}</h2>
          <h2 className="Data">Status: {character?.status}</h2>
          <h2 className="Data">Species: {character?.species}</h2>
          <h2 className="Data">Gender: {character?.gender}</h2>
          <h2 className="Data">Origin: {character?.origin?.name}</h2>
        </div>
      </div>
    </div>
  );
}