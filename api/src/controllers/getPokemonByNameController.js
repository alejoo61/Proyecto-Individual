const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";
const { Pokemon, Types } = require("../db");

const getPokemonByNameController = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { name },
    include: [{ model: Types }],
  });

  if (pokemon) {
    return pokemon;
  }

  const response = await axios(`${URL}/${name}`);
  const result = response.data;
  const attack = result.stats.find((object) => object.stat.name === "attack");
  const defense = result.stats.find((object) => object.stat.name === "defense");
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
};

module.exports = getPokemonByNameController;
