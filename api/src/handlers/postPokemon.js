const postPokemonController = require("../controllers/postPokemonController");

const postPokemon = async (req, res) => {
  try {
    const response = await postPokemonController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postPokemon;
