import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={style.card_container}>
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
          <button className={style.btn_plus}>+</button>
        </Link>
      </div>
    </div>
  );
}
