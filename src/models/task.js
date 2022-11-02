const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema1 = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
});

const TaskSchema2 = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
});

const Task1 = mongoose.model("Task1", TaskSchema1); 
const Task2 = mongoose.model("Task2", TaskSchema2); 

module.exports = {Task1,Task2};