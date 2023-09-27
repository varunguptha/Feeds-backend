const express = require("express");
const router = express.Router();
const { createstock, deletestock, updatestock, getstocks } = require("../controllers/stockController");
const { getStockById } = require("../controllers/stockController");

router.post("/", createstock);
router.put("/:id", updatestock);
router.get("/", getstocks);
router.delete("/:id", deletestock);
router.get('/:id', getStockById);

module.exports = router;