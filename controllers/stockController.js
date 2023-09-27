const asyncHandler = require("express-async-handler");
const Stocks = require("../dbmodel/stockDB");


const createstock = asyncHandler(async (req, res) =>
{
    const { name, quantity, price, description } = req.body;
    if (!name || !quantity || !price || !description)
    {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const stock = await Stocks.create({
        name,
        quantity,
        price,
        description
    });

    res.status(201).json(stock);
});

const getstocks = asyncHandler(async (req, res) =>
{
    const stocks = await Stocks.find().sort("-createdAt");
    res.status(200).json(stocks);
});

const deletestock = asyncHandler(async (req, res) =>
{
    const stock = await Stocks.findById(req.params.id);
    if (!stock)
    {
        res.status(404);
        throw new Error("stock not found");
    }
    await stock.deleteOne();
    res.status(200).json({ message: "stock deleted." });
});

const updatestock = asyncHandler(async (req, res) =>
{
    const { name, quantity, price, description } = req.body;
    const { id } = req.params;

    const stock = await Stocks.findById(id);

    if (!stock)
    {
        res.status(404);
        throw new Error("Saale not found");
    }
    const updatedstock = await Stocks.findByIdAndUpdate(
        { _id: id },
        {
            name,
            quantity,
            price,
            description
        },
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json(updatedstock);
});
const getStockById = asyncHandler(async (req, res) =>
{
    const stock = await Stocks.findById(req.params.id);

    if (!stock)
    {
        res.status(404);
        throw new Error('Stock not found');
    }

    res.status(200).json(stock);
});

module.exports = {
    createstock,
    getstocks,
    deletestock,
    updatestock,
    getStockById
};
