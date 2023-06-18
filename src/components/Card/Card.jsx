import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={style.card_container}>
      <div className={style.btn_container}>
        <FontAwesomeIcon
          icon={faTrash}
          className={style.btn}
          onClick={() => onClose(id)}
        ></FontAwesomeIcon>
      </div>

      <NavLink className={style.nav_color} to={`/detail/${id}`}>
        <div className={style.detail_container}>
          <h2>{name}</h2>

          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>
      </NavLink>
      <div className={style.image_container}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
