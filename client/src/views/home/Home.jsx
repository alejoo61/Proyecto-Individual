import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { getPokemons, getPokemonsByName } from "../../redux/actions";

import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import Order from "../../components/order/Order";
import Filters from "../../components/filters/Filters";
import Create from "../create/Create";
import "../home/home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  const [scrolling, setScrolling] = useState(false);

  const navigate = useNavigate();

  const [aux, setAux] = useState(false);

  const pokemonSearch = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Cambia 200 al valor de desplazamiento que desees
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getPokemons());
    //return(() =>{
    //clearDetail()
    //})
  }, [dispatch]);

  useEffect(() => {
    const pokemonDetails = useSelector((state) => state.pokemonDetails);
    if (pokemonDetails.id && aux) {
      setAux(false);
    }
  }, [pokemonDetails, aux, navigate]);

  const onSearch = async (name) => {
    try {
      if (name) {
        dispatch(await getPokemonsByName(name));
        navigate(`/detail/${pokemonDetails.id}`);
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
      <div className={`navbar ${scrolling ? "solid-bg" : ""} navbar`}>
        <div>
          <img
            src="../logopokemon.webp"
            alt=""
            style={{ marginLeft: "1rem", width: "250px" }}
          />
        </div>

        <Filters />
        <Order />

        <Navbar onSearch={onSearch} />
        <Link
          style={{
            textDecoration: "none",
            color: "#0000;",
            marginTop: "8px",
            marginRight: "5rem",
          }}
          to={"/create"}
        >
          <h1 className="link">Create</h1>
        </Link>
      </div>

      <Cards allPokemons={allPokemons} />
    </div>
  );
}

export default Home;
