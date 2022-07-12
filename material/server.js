/**
 *  Konfiguration des Servers mittels express
 */

const express = require('express');
const app = express();
const port = 3000;
const rezeptRouter = require("./routes/rezepte");

app.use("/src", express.static('./src'));
app.use("/dist", express.static('./dist/'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(rezeptRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})