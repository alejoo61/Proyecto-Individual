import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";

import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import "../home/home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
    //return(() =>{
    //clearDetail()
    //})
  }, [dispatch]);

  const onSearch = async (name) => {
    try {
      const response = await axios(`/name?name=${name}`);

      const data = response.data;

      if (data.name && !allPokemons.find((pokemon) => pokemon.name === name)) {
        dispatch(getPokemonsByName(data));
      } else {
        window.alert("Personaje Repetido");
      }
    } catch (error) {
      window.alert("Pokemon no encontrado");
    }
  };

  return (
    <div className="home">
      <h1>Estas en Home</h1>
      <Navbar onSearch={onSearch} />
      <Cards allPokemons={allPokemons} />
    </div>
  );
}

export default Home;
