import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShuffle } from '@fortawesome/free-solid-svg-icons';
import style from "../SeachBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  function handleChange(event) {
    setId(event.target.value);
  }
  const add = () => {
    onSearch(id);
    setId("");
  };
  const apr = () => {
    const pija = Math.floor(Math.random() * 825) + 1;
    onSearch(pija);
  };

  return (
    <div className={style.bar_container}>
      <input
         className={style.bar_search}
        type="search"
        name="id"
        placeholder="Insert ID..."
        onChange={handleChange}
        value={id}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={add}>Agregar</FontAwesomeIcon>
      <FontAwesomeIcon icon={faShuffle} onClick={apr}>Random</FontAwesomeIcon>
    </div>
  );
}