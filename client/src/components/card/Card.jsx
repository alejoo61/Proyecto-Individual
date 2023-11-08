import "../card/card.styles.css";
import { Link, useNavigate } from "react-router-dom";

function Card({ pokemon }) {
  const navigate = useNavigate();
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/detail/${pokemon.id}`}
      className={
        "card-container card-container-" +
        pokemon?.types?.map((type) => type.name)[0]
      }
    >
      <div
        className="card-container-img"
        style={{ width: "250px", minHeight: "252px" }}
      >
        <img src={pokemon.image} style={{ width: "100%" }} />
      </div>
      <div>
        <h2>{pokemon.name} </h2>
        <div className="card-type">
          <div>Type:</div>
          {pokemon.types?.map((type) => (
            <p key={type.name}>{type.name} </p>
          ))}{" "}
        </div>
      </div>
    </Link>
  );
}

export default Card;
