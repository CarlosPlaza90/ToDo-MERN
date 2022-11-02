const mongoose = require("mongoose");

const URI = "mongodb+srv://carlos:aZtPJKP1Ohut2CMI@cluster0.uda0tyx.mongodb.net/Tareas?retryWrites=true&w=majority";

mongoose.connect(URI) 
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

module.exports = mongoose;