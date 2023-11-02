const { Pokemon, Types } = require("../db");

const getPokemonDbController = async () => {
  const pokemonsDB = await Pokemon.findAll({ include: { model: Types } });
  if (pokemonsDB.length !== 0) {
    console.log(pokemonsDB);

    return [...pokemonsDB];
  } else {
    return { error: error.message };
  }
};

module.exports = getPokemonDbController;
