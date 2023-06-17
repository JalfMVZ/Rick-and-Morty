import React from "react";
import './Nav.module.css';
import SearchBar from '../SeachBar/SearchBar';
import {Link} from 'react-router-dom'

export default function NavBar({onSearch, logout}) {
  return (
  <div className = 'nav'>
    <SearchBar onSearch = {onSearch}/>
    <button onClick = {logout}>LogOut</button>
    <Link to = '/about'>
      <button >About</button>
    </Link>
    <Link to = '/home'>
      <button >Home</button>
    </Link>

  </div>
  );
}