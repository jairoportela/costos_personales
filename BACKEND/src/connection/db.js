const mongoose = require("mongoose");
(function () {
    mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conectado a la base de datos");
})()