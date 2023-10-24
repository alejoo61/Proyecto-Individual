const getAllPokemonsController = require("../controllers/getAllPokemonsController");

const getAllPokemons = async (req, res) => {
  try {
    const response = await getAllPokemonsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllPokemons;
