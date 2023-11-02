import "../card/card.styles.css";
import { Link } from "react-router-dom";

function Card({ pokemon }) {
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
          <p>{type.name} </p>
        ))}{" "}
      </div>
    </div>
  );
}

export default Card;
