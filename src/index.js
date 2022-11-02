const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const { mongoose } = require("./database")

// Settings
app.set("port", process.env.PORT || 3000); //funciona para decir que tome el puerto del sistema operativo
                                           //Para  correr en la nube

// Middlewares funciones antes de ejecutar a las rutas
app.use(morgan("dev"));
app.use(express.json()); // para recibir y mandar informacion en formato json y comprobar este formato


// Routes

app.use("/api/tasks", require("./routes/task.routes"));

// Static files
app.use(express.static(path.join(__dirname,"public")));



// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});