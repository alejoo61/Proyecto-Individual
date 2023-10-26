const { Router } = require("express");
const getAllPokemons = require("../handlers/getAllPokemons");
const getPokemonById = require("../handlers/getPokemonById");
const getPokemonByName = require("../handlers/getPokemonByName");
const postPokemon = require("../handlers/postPokemon");

const pokemonRouter = Router();
pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/id/:id", getPokemonById);
pokemonRouter.get("/name", getPokemonByName);
pokemonRouter.post("/create", postPokemon);

module.exports = pokemonRouter;
