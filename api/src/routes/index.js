const { Router } = require("express");
// Importar todos los routers;
const pokemonRouter = require("./pokemosRouter");
const typesRouter = require("./typesRouter");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemonRouter);
router.use("/types", typesRouter);

module.exports = router;
