const getPokemonByIdController = require("../controllers/getPokemonByIdController");

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await getPokemonByIdController(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonById;
