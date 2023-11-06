import React, { useEffect } from "react";
import "./detail.styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonsId } from "../../redux/actions";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemonDetail = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(getPokemonsId(id));
  }, []);

  return (
    <div className="card_details">
      <h2 className="pokemon_name" style={{ marginTop: "1rem" }}>
        {pokemonDetail?.name}
      </h2>
      <div className="img_container">
        <img src={pokemonDetail?.image} alt="" />
      </div>
      <div key={id} className="type_container">
        {pokemonDetail?.types?.map((type) => (
          <div className="type_item">
            <span className={"detail_type2 detail_type2_" + type.name}></span>
            <span>{type.name}</span>
          </div>
        ))}
      </div>
      <div className="detail_powers">
        <div className="detail_power detail_power_info">
          <div className="detail_power_flex">
            <span>Height</span>
            <span> {pokemonDetail?.height / 10}m</span>
          </div>
        </div>
        <div className="detail_power detail_power_info">
          <div className="detail_power_flex">
            <span>Weight</span>
            <span>{pokemonDetail?.weight / 10}k</span>
          </div>
        </div>
        <div className="detail_power detail_power_attack">
          <div className="detail_power_flex">
            <span>Attack</span>
            <span>{pokemonDetail?.attack}</span>
          </div>
          <div className="detail_bar">
            <div
              className="detail_bar_fill"
              style={{ width: (pokemonDetail?.attack * 100) / 102 + "%" }}
            ></div>
          </div>
        </div>
        <div className="detail_power detail_power_defense">
          <div className="detail_power_flex">
            <span>Defense</span>
            <span>{pokemonDetail?.defense}</span>
          </div>
          <div className="detail_bar">
            <div
              className="detail_bar_fill"
              style={{ width: (pokemonDetail?.defense * 100) / 110 + "%" }}
            ></div>
          </div>
        </div>
        <div className="detail_power detail_power_health">
          <div className="detail_power_flex">
            <span>Health</span>
            <span>{pokemonDetail?.health}</span>
          </div>
          <div className="detail_bar">
            <div
              className="detail_bar_fill"
              style={{ width: (pokemonDetail?.health * 100) / 140 + "%" }}
            ></div>
          </div>
        </div>
        <div className="detail_power detail_power_speed">
          <div className="detail_power_flex">
            <span>Speed</span>
            <span>{pokemonDetail?.speed}</span>
          </div>
          <div className="detail_bar">
            <div
              className="detail_bar_fill"
              style={{ width: (pokemonDetail?.speed * 100) / 110 + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <button
        style={{
          margin: "auto",
          width: "100px",
          height: "20px",
          cursor: "pointer",
          alignItems: "center",
          flexDirection: "column",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default Details;
