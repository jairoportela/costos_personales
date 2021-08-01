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

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { title, category, value } = req.body;
    const editingExpence = await Expence.findById(id);
    editingExpence.title = title ? title : editingExpence.title;
    editingExpence.category = category ? category : editingExpence.category;
    editingExpence.value = value ? value : editingExpence.value;
    editingExpence.save();
    res.json(editingExpence);
});


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Expence.findByIdAndDelete(id);
    res.json({
        message: "Eliminado"
    });

});
module.exports = router;