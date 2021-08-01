const express = require("express");
const router = express.Router();

const Expence = require("../models/expense.model")

router.get("/", async (req, res) => {
    const expenses = await Expence.find();
    res.json(expenses);
});

router.post("/", async (req, res) => {
    const { title, category, value } = req.body;
    const newExpense = new Expence({ title, category, value });
    await newExpense.save();
    res.status(201).json({
        message: "Creado"
    });
});
module.exports = router;