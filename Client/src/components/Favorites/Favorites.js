import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  return (
    <div className={style.favorites}>
      <h1>My Favorites</h1>
      <div className={style.favorites_container}>
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
