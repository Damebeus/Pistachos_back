const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RouteProduct = require("./products");
const RouteOrder = require("./ordenes");
const RouteEnvio = require("./envios");
const RouteFiltros = require("./filtros");

const router = Router();

// Configurar los routers

router.use('/productos', RouteProduct);
router.use('/ordenes', RouteOrder);
router.use('/filtros', RouteEnvio);
router.use('/envio', RouteFiltros);


module.exports = router;
