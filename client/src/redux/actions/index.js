import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONSID = "GET_POKEMONSID";
export const GET_POKEMONSBYNAME = "GET_POKEMONSBYNAME";
export const ORDER_CARDS = "ORDER_CARDS";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const FILTER_TYPES = "FILTER_TYPES";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/pokemons/");
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
      const response = await axios.get(`/pokemons/id/${id}`);
      //console.log(response.data);
      await dispatch({
        type: GET_POKEMONSID,
        payload: response.data,
      });
    } catch (error) {
      // Manejo de errores si la solicitud falla
      console.log(error);
    }
  };
};

export const getPokemonsByName = async (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/pokemons/name?name=${name}`);
      // console.log(response.data);
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

export const orderCards = (order) => {
  console.log(order);
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};

export const filterOrigin = (filter) => {
  return {
    type: FILTER_ORIGIN,
    payload: filter,
  };
};

export const filterTypes = (type) => {
  return {
    type: FILTER_TYPES,
    payload: type,
  };
};

export const createPokemon = (newPokemon) => {
  return async (dispatch) => {
    try {
      console.log(newPokemon);
      const response = await axios.post("/pokemons/create", newPokemon);
      const data = response.data;
      dispatch({
        type: "ADD_POKEMON_FRONT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
