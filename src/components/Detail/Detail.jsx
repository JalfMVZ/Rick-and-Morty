import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

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
    <div className={style.DetailPadre}>
      <div className={style.Detail}>
        <img src={character?.image} alt="" className={style.Img} />
        <div className={style.CartaDetail}>
          <h2 className={style.Name}>{character?.name}</h2>
          <h2 className={style.Data}>Status: {character?.status}</h2>
          <h2 className={style.Data}>Species: {character?.species}</h2>
          <h2 className={style.Data}>Gender: {character?.gender}</h2>
          <h2 className={style.Data}>Origin: {character?.origin?.name}</h2>
        </div>
      </div>
    </div>
  );
}
