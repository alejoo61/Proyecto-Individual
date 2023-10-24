const getTypesController = require("../controllers/getTypesController");

const getTypesHandler = async (req, res) => {
  try {
    const response = await getTypesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTypesHandler;
