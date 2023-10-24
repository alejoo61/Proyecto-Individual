const { Router } = require("express");
const getAllPokemons = require("../handlers/getAllPokemons");

const pokemonRouter = Router();
pokemonRouter.get("/", getAllPokemons);

module.exports = pokemonRouter;
