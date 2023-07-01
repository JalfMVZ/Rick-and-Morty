import React from "react";
import SearchBar from "../SeachBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


export default function NavBar({ onSearch, logout }) {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to="/Forms">
      <button onClick={logout} className={style.btn_about}>
        LogOut
      </button>
      </Link>

      <Link to="/about">
        <button className={style.btn_about}>About</button>
      </Link>
      <Link to="/home">
        <button className={style.btn_home}>Home</button>
      </Link>
      <Link to="/favorites">
        <button className={style.btn_favorites}>Favorites</button>
      </Link>
    </div>
  );
}
