import React, { useEffect } from "react";
import "./detail.styles.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsId } from "../../redux/actions";
import "../detail/detail.styles.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsId(id));
  }, [dispatch]);

  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  console.log(pokemonDetails);

  return (
    <div className="container">
      <div className="detail-container">
        <div className="div-img">
          <img src={pokemonDetails?.image} alt="" />
          <div className="types">
            Type:
            {pokemonDetails?.types?.map((type) => (
              <p>{type.name} </p>
            ))}{" "}
          </div>
        </div>

        <div className="detail">
          <h2>{pokemonDetails?.name} </h2>
          <p>Vida:{pokemonDetails.health} </p>
          <p>Ataque:{pokemonDetails.attack} </p>
          <p>Defesa:{pokemonDetails.defense} </p>
          {pokemonDetails.speed ? (
            <p>Velocidad:{pokemonDetails.speed} </p>
          ) : null}
          {pokemonDetails.height ? (
            <p>Altura:{pokemonDetails.height} </p>
          ) : null}
          {pokemonDetails.weight ? (
            <p>Peso:{pokemonDetails.weight} Kg </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Details;
