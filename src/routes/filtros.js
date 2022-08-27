const { Product} = require("../db");
const { Router } = require("express");
const router = Router();


router.get("/pizza", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Pizza",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/bebidas", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Bebidas",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/empanadas", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Empanadas",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/milanesa", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Milanesa",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/hamburguesa", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Hamburguesa",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/lomito", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Lomito",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/promo", async (req, res) => {
  try {
    let byCategory = await Product.findAll({
      where: {
        category: "Promo",
      },
    });
    return res.status(200).send(byCategory);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/deshabilitado", async (req, res) => {
  try {
    let disabled = await Product.findAll({
      where: {
        disabled: true,
      },
    });
    return res.status(200).send(disabled);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/habilitado", async (req, res) => {
  try {
    let disabled = await Product.findAll({
      where: {
        disabled: false,
      },
    });
    return res.status(200).send(disabled);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/stock", async (req, res) => {
  try {
    let stock = await Product.findAll({
      where: {
        stock: true,
      },
    });
    return res.status(200).send(stock);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

router.get("/nostock", async (req, res) => {
  try {
    let stock = await Product.findAll({
      where: {
        stock: false,
      },
    });
    return res.status(200).send(stock);
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;