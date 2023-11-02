const axios = require("axios");
const { Pokemon, Types } = require("../db");

const URL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemonsController = async () => {
  try {
    const response = await axios(`${URL}?limit=151`);

    const allPokemons = await response.data;

    const promises = allPokemons.results.map(async (pokemon) => {
      const response = await axios(`${URL}/${pokemon.name}`);
      const result = response.data;
      const attack = result.stats.find(
        (object) => object.stat.name === "attack"
      );
      const defense = result.stats.find(
        (object) => object.stat.name === "defense"
      );
      const health = result.stats.find((object) => object.stat.name === "hp");
      const speed = result.stats.find((object) => object.stat.name === "speed");

      const types = result.types.map((type) => type.type);
      return {
        id: result.id,
        name: result.name,
        image: result.sprites.front_default,
        height: result.height,
        weight: result.weight,
        attack: attack.base_stat,
        defense: defense.base_stat,
        health: health.base_stat,
        speed: speed.base_stat,
        types: types,
      };
    });

    const pokemonsApi = await Promise.all(promises);
    const pokemonsDB = await Pokemon.findAll({ include: { model: Types } });
    if (pokemonsDB.length !== 0) {
      console.log(pokemonsDB);

      return [...pokemonsDB, ...pokemonsApi];
    }
    return pokemonsApi;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllPokemonsController;
