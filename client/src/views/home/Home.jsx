import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getPokemons, getPokemonsByName } from "../../redux/actions";

import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import Order from "../../components/order/Order";
import Filters from "../../components/filters/Filters";
import "../home/home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  const navigate = useNavigate();

  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getPokemons());
    //return(() =>{
    //clearDetail()
    //})
  }, [dispatch]);

  useEffect(() => {
    if (pokemonDetails.id && aux) {
      navigate(`/detail/${pokemonDetails.id}`);
      setAux(false);
    }
  }, [pokemonDetails, aux, navigate]);

  const onSearch = async (name) => {
    try {
      if (name) {
        dispatch(await getPokemonsByName(name));
        setAux(true);
      } else {
        throw new Error("Por favor usa un nobre valido");
      }
    } catch (error) {
      window.alert("Pokemon no encontrado");
    }
  };

  return (
    <div className="home">
      <div className="navbar">
        <Filters />
        <Order />

        <Navbar onSearch={onSearch} />
      </div>

      <Cards allPokemons={allPokemons} />
    </div>
  );
}

export default Home;
