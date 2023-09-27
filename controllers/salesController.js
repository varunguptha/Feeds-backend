const asyncHandler = require("express-async-handler");
const Sales = require("../dbmodel/salesDB");


const createSale = asyncHandler(async (req, res) =>
{
  const { name, quantity, price, description } = req.body;
  if (!name || !quantity || !price || !description)
  {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  const sale = await Sales.create({
    name,
    quantity,
    price,
    description
  });

  res.status(201).json(sale);
});

const getSales = asyncHandler(async (req, res) =>
{
  const sales = await Sales.find().sort("-createdAt");
  res.status(200).json(sales);
});

const deleteSale = asyncHandler(async (req, res) =>
{
  const sale = await Sales.findById(req.params.id);
  if (!sale)
  {
    res.status(404);
    throw new Error("Sale not found");
  }
  await sale.deleteOne();
  res.status(200).json({ message: "Sale deleted." });
});

const updateSale = asyncHandler(async (req, res) =>
{
  const { name, quantity, price, description } = req.body;
  const { id } = req.params;

  const sale = await Sales.findById(id);

  if (!sale)
  {
    res.status(404);
    throw new Error("Saale not found");
  }
  const updatedSale = await Sales.findByIdAndUpdate(
    { _id: id },
    {
      name,
      quantity,
      price,
      description,

    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedSale);
});
const getSaleById = asyncHandler(async (req, res) =>
{
  const sale = await Sales.findById(req.params.id);

  if (!sale)
  {
    res.status(404);
    throw new Error('sales not found');
  }

  res.status(200).json(sale);
});


module.exports = {
  createSale,
  getSales,
  deleteSale,
  updateSale,
  getSaleById
};
