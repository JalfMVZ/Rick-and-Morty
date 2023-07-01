import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../Redux/actions";
import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const { id, name, image, addFavorite, removeFavorite, myFavorites, onClose } =
    props;

  const [isFav, setIsFav] = useState(false);
  const [doubleClick, setDoubleClick] = useState(false);

  useEffect(() => {
    const isFavorite = myFavorites.some((favorite) => favorite.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  const heartAnimation = useSpring({
    opacity: isFav && doubleClick ? 1 : 0,
    transform: `scale(${isFav && doubleClick ? 1 : 0})`,
    config: { tension: 300, friction: 20 },
  });

  const handleDoubleClick = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, image });
    }
    setIsFav(!isFav);
    setDoubleClick(true);

    setTimeout(() => {
      setDoubleClick(false);
    }, 1000);
  };

  const handleFavorite = () => {
    if (!doubleClick) {
      handleDoubleClick();
    }
  };

  return (
    <div className={style.card_container} onClick={handleFavorite}>
      <div className={style.btn_container}>
        <FontAwesomeIcon
          icon={faTrash}
          className={style.btn}
          onClick={() => onClose(id)}
        />
      </div>

      <div className={style.nav_color}>
        <div className={style.detail_container}>
          <h2>{name}</h2>
        </div>
      </div>

      <div className={style.image_container}>
        <img className={style.img_rym} src={image} alt={name} />
      </div>

      <div className={style.btn_plus_container}>
        <Link to={`/detail/${id}`} className={style.nav_color}>
          <button  className={style.btn_plus}>+</button>
        </Link>
      </div>

      <div className={style.fav_container}>
        <animated.div style={heartAnimation}>
          <FontAwesomeIcon icon={faHeart} className={style.fav_plus} />
        </animated.div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFav(character)),
    removeFavorite: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
