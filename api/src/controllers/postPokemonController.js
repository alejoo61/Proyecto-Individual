const { Pokemon, Types } = require("../db");

const postPokemonController = async (req) => {
  const { name, image, height, weight, attack, defense, health, speed, types } =
    req.body;

  if (!name || !image || !attack || !defense || !health) {
    return { message: "Por favor faltan campos requeridos" };
  }

  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: { image, height, weight, attack, defense, health, speed },
  });

  if (created) {
    if (types && Array.isArray(types)) {
      await pokemon.setTypes(types);
    }

    const object = {
      ...pokemon.get(),
      types: types
        ? await Promise.all(types.map(async (id) => await Types.findByPk(id)))
        : [],
    };

    return object;
  } else {
    throw new Error(`A Pokémon with the name ${name} already exists.`);
  }
};

module.exports = postPokemonController;
