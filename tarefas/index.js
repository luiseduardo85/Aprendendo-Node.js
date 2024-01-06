const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

const users = require("./users")

const basePath = path.join(__dirname, 'views');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static("public"));

app.use("/users", users);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`);
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});
