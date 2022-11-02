const express = require("express");
const task = require("../models/task");
const router = express.Router();

const {Task1, Task2} = require("../models/task");

router.get("/", async (req, res) => {
    const tasks = await Task1.find()
    console.log(tasks);
    res.json(tasks);

});

router.post("/", async (req, res) => {
    const { title, description } = req.body;
    const task1 = new Task1({ title, description });
    await task1.save();
    res.json({ status: "Task1 Saved" });
});

router.get("/:id", async (req, res) => { 
    const task = await Task1.findById(req.params.id);
    res.json(task);
});

router.put("/:id", async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task1.findByIdAndUpdate(req.params.id, newTask)
    console.log(req.params.id);
    res.json({ status: "Task1 Updated" });


});

router.delete("/:id", async (req, res) => {
    await Task1.findByIdAndDelete(req.params.id);
    res.json({ status: "Task1 Deleted" });


});

module.exports = router;