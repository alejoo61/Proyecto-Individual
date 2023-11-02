const getPokemonDbController = require("../controllers/getPokemonDbController");

const getPokemonDb = async (req, res) => {
  try {
    const response = await getPokemonDbController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonDb;
