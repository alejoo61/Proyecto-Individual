import { GET_POKEMONS } from "../actions";
import { GET_POKEMONSID } from "../actions";
import { GET_POKEMONSBYNAME } from "../actions";

let initialState = { allPokemons: [], pokemonDetails: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case GET_POKEMONSID:
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case GET_POKEMONSBYNAME:
      return {
        ...state,
        allPokemons: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
