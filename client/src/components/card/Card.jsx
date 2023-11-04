import "../card/card.styles.css";
import { Link, useNavigate } from "react-router-dom";

function Card({ pokemon }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "card-container card-container-" +
        pokemon?.types?.map((type) => type.name)[0]
      }
    >
      <div>
        <Link to={`/detail/${pokemon.id}`}>
          <img src={pokemon.image} alt="" />
        </Link>
      </div>

      <h2>{pokemon.name} </h2>
      <div className="card-type">
        <div>Type:</div>
        {pokemon.types?.map((type) => (
          <p key={type.name}>{type.name} </p>
        ))}{" "}
      </div>
    </div>
  );
}

export default Card;
