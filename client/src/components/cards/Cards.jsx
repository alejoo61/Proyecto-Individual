import { useState } from "react";
import "../cards/cards.styles.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

function Cards({ allPokemons }) {
  const [page, setPage] = useState(1);
  const [toPage, setToPage] = useState(12);
  const max = Math.ceil(allPokemons?.length / toPage);

  const pokemonsList = allPokemons;

  return (
    <div className="card-list">
      {pokemonsList
        ?.slice((page - 1) * toPage, (page - 1) * toPage + toPage)
        .map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  );
}

export default Cards;
