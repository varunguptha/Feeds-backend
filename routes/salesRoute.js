const express = require("express");
const router = express.Router();
const { createSale, getSales, updateSale, deleteSale, getSaleById } = require("../controllers/salesController")

router.post("/", createSale);
router.put("/:id", updateSale);
router.get("/", getSales);
router.delete("/:id", deleteSale);
router.get('/:id', getSaleById);



module.exports = router;