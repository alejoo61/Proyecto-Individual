import { FILTER_ORIGIN, GET_POKEMONS, ORDER_CARDS } from "../actions";
import { GET_POKEMONSID } from "../actions";
import { GET_POKEMONSBYNAME } from "../actions";
import { FILTER_TYPES } from "../actions";

let initialState = {
  allPokemons: [],
  pokemonDetails: [],
  allPokemonsDefault: [],
  origin: "ALL",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsDefault: action.payload,
      };
    case GET_POKEMONSID:
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case GET_POKEMONSBYNAME:
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case ORDER_CARDS:
      const allPokemonsOrder = [...state.allPokemons];
      console.log(allPokemonsOrder);
      if (action.payload === "A-Z") {
        allPokemonsOrder.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (action.payload === "Z-A") {
        allPokemonsOrder.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (action.payload === "MAS_ATAQUE") {
        allPokemonsOrder.sort((a, b) => {
          return b.attack - a.attack;
        });
      } else if (action.payload === "MENOS_ATAQUE") {
        allPokemonsOrder.sort((a, b) => {
          return a.attack - b.attack;
        });
      }
      return { ...state, allPokemons: allPokemonsOrder };

    case FILTER_ORIGIN:
      if (action.payload === "ALL") {
        return {
          ...state,
          allPokemons: state.allPokemonsDefault,
          origin: "ALL",
        };
      } else if (action.payload === "DB") {
        const pokemonsDB = state.allPokemonsDefault.filter(
          (pokemon) => !Number(pokemon.id)
        );
        return {
          ...state,
          allPokemons: pokemonsDB,
          origin: "DB",
        };
      } else if (action.payload === "API") {
        const pokemonsApi = state.allPokemonsDefault.filter((pokemon) =>
          Number(pokemon.id)
        );
        return {
          ...state,
          allPokemons: pokemonsApi,
          origin: "API",
        };
      }
    case FILTER_TYPES:
      if (action.payload === "ALL") {
        return {
          ...state,
          allPokemons: state.allPokemonsDefault,
        };
      }
      if (state.origin === "ALL") {
        const pokemonsFilter = state.allPokemonsDefault.filter((pokemon) => {
          return pokemon.types.some((type) => type.name === action.payload);
        });
        return {
          ...state,
          allPokemons: pokemonsFilter,
        };
      } else if (state.origin === "API") {
        const pokemonsApi = state.allPokemonsDefault.filter((pokemon) => {
          return Number(pokemon.id);
        });
        const pokemonsFilter = pokemonsApi.filter((pokemon) => {
          return pokemon.types.some((type) => type.name === action.payload);
        });
        return {
          ...state,
          allPokemons: pokemonsFilter,
        };
      } else if (state.origin === "DB") {
        const pokemonsDb = state.allPokemonsDefault.filter((pokemon) => {
          return !Number(pokemon.id);
        });
        const pokemonsFilter = pokemonsDb.filter((pokemon) => {
          return pokemon.types.some((type) => type.name === action.payload);
        });
        return {
          ...state,
          allPokemons: pokemonsFilter,
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
