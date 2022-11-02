const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// ADD a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Task Saved'});
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