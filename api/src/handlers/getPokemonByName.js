const getPokemonByNameController = require("../controllers/getPokemonByNameController");

const getPokemonByName = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await getPokemonByNameController(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonByName;
