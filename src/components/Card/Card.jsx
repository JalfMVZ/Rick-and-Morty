import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={style.card_container}>
      <div>
        <button className={style.btn} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <div>
      <NavLink className={style.nav_color}  to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      </div>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
