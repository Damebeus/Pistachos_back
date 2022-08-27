const { Router } = require("express");
const router = Router();
const {Envio} = require("../db")

router.post("/", async (req, res) => {
    const { calle, numero, ciudad, provincia, codigoPostal, pisoDepartamento } =
      req.body;
  
    if ((calle, numero, ciudad, provincia, codigoPostal)) {
      Envio.create({
        calle, 
        numero, 
        ciudad, 
        provincia, 
        codigoPostal,
        pisoDepartamento,
      });
      return res.send("direccion creada correctamente");
    } else {
      return res.status(400).send("Please, insert the information correctly");
    }
  });


module.exports = router;
