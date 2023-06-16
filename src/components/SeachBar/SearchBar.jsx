import style from "../SeachBar/SearchBar.module.css";
import { useState } from "react";

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
    <div className={style.bar_style}>
      <input
        type="search"
        name="id"
        placeholder="Insert ID..."
        onChange={handleChange}
        value={id}
      />
      
      <button onClick={add}>Agregar</button>
      <button onClick={apr}>Random</button>
    </div>
  );
}
