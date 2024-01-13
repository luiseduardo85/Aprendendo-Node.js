const express = require("express");
const exphbs = require("express-handlebars");

// incializado o express
const app = express()

const port = 3000;

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);

app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
    {
        id: 1,
        title: "Caderno",
        price: "R$18,00",
        quantity: 25,
    },
    {
        id: 2,
        title: "Lapis",
        price: "R$1,40",
        quantity: 45,
    },
    {
        id: 3,
        title: "Caneta",
        price: "R$2,00",
        quantity: 35,
    },
];

app.get("/home", (req,res)=>{
    res.render("home", {products})
})

app.get("/product/:id", (req, res) =>{
    const product = products[parseInt(req.params.id) - 1]

    res.render("products", {product})
})

app.get("/", (req, res) =>{
    res.render("Ola mundo")
})

app.listen(port, () =>{
    console.log("Servidor Rodando na porta 3000")
})