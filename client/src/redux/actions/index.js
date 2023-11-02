import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONSID = "GET_POKEMONSID";
export const GET_POKEMONSBYNAME = "GET_POKEMONSBYNAME";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons/");
      dispatch({
        type: GET_POKEMONS,
        payload: response.data,
      });
    } catch (error) {
      // Manejo de errores si la solicitud falla
      console.log(error);
    }
  };
};

export const getPokemonsId = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons/id/${id}`
      );
      console.log(response.data);
      dispatch({
        type: GET_POKEMONSID,
        payload: response.data,
      });
    } catch (error) {
      // Manejo de errores si la solicitud falla
      console.log(error);
    }
  };
};

export const getPokemonsByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons/name?name=${name}`
      );
      console.log(response.data);
      dispatch({
        type: GET_POKEMONSBYNAME,
        payload: response.data,
      });
    } catch (error) {
      // Manejo de errores si la solicitud falla
      console.log(error);
    }
  };
};
