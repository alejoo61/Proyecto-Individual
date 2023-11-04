import React, { useEffect } from "react";
import "./detail.styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsId } from "../../redux/actions";
import "../detail/detail.styles.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //console.log(pokemonDetails);
  useEffect(() => {
    dispatch(getPokemonsId(id));
  }, []);

  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  return (
    <div className="container">
      <div className="detail-container">
        <div className="div-img">
          <img src={pokemonDetails?.image} alt="" />
          <div className="types">
            Type:
            {pokemonDetails?.types?.map((type) => (
              <p key={type.name}>{type.name} </p>
            ))}{" "}
          </div>
        </div>

        <div className="detail">
          <h2>{pokemonDetails?.name} </h2>
          <p>HP: {pokemonDetails.health} </p>
          <p>ATAQUE: {pokemonDetails.attack} </p>
          <p>DEFENSA: {pokemonDetails.defense} </p>
          {pokemonDetails.speed ? (
            <p>VELOCIDAD: {pokemonDetails.speed} </p>
          ) : null}
          {pokemonDetails.height ? (
            <p>ALTURA: {pokemonDetails.height / 10} m </p>
          ) : null}
          {pokemonDetails.weight ? (
            <p>PESO: {pokemonDetails.weight / 10} kg </p>
          ) : null}
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Details;
