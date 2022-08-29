const { Router } = require("express");
const router = Router();

const { Product, Order, Orderline, Envio } = require('../db.js');

//ruta post donde se crea la orden de compra
router.post('/', async (req, res, next) => {
  try {
    const orden = await Order.create()
    
    // Itera sobre cada {} de orderlines enviado del carrito del front del usuario
    await req.body.forEach(async (orderline) => {
      const { productId, quantity, amount } = orderline;


      await orden.addProducts(productId, { through: { quantity: quantity, amount: amount }})
      return
    })
  
    return res.status(200).send(orden)
  } catch (error) {
    console.log(error)
    new Error(error)
  }
  
  });

//get de las ordenes con la direccion a la que fue enviada y los productos comprados
  router.get('/allOrders', (req, res, next) => {
	Order.findAll({
    include: [
      { model: Product, attributes: ['id','name', 'image', 'price', "category"], through: {
        attributes: ['amount','quantity']
      }},
      {model: Envio}
    ],
	}).then(orders => {
		if (!orders) return res.sendStatus(404);
		return res.status(200).json(orders);
	})
    .catch(error => {
        return res.send(error);
    })
});



//get de las ordenes pero ordenadas por fecha asc 
router.get('/asc', async (req, res) => {

    try {
      const orden = await Order.findAll({
        include: [
            { model: Product, attributes: ['id','name', 'image', 'price', "category"], through: {
              attributes: ['amount','quantity']
            }}
          ],
        order: [["buyDate", "ASC"]]
      })

      if (orden) return res.send('Orden no encontrada...')

      return res.send(orden)
    } catch (error) {
      res.status(500).json({ msg: err });
    }
});

//get de las ordenes pero ordenadas por fecha desc 
router.get('/desc', async (req, res) => {

    try {
      const orden = await Order.findAll({
        include: [
            { model: Product, attributes: ['id','name', 'image', 'price', "category"], through: {
              attributes: ['amount','quantity']
            }}
          ],
        order: [["buyDate", "DESC"]]
      })

      if (orden) return res.send('Orden no encontrada...')

      return res.send(orden)
    } catch (error) {
      res.status(500).json({ msg: err });
    }
});

//get de las ordenes pero para buscar por productos
// router.get('/users/ordersByQuery', async (req, res) => {
//     const { order } = req.query
//     try {
//       let byStatus = await Order.findAll({
//         where :{status: order }
//       })

//       return res.status(200).send(byStatus);
//     } catch (error) {
//       res.status(500).json({ msg: err });
//     }
// });

module.exports = router;