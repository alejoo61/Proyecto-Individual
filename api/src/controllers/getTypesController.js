const axios = require("axios");
const { Types } = require("../db");

const getTypesController = async () => {
  const data = await Types.findOne();
  if (!data) {
    const response = await axios("https://pokeapi.co/api/v2/type");
    const result = response.data;
    const promises = result.results.map(async (type) => {
      return await Types.create({
        name: type.name,
      });
    });
    const types = await Promise.all(promises);
    return types;
  } else {
    const types = await Types.findAll();
    return types;
  }
};
module.exports = getTypesController;
