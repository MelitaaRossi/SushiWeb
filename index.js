const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let products = [{
        id: 1,
        name: "name1",
        price: 50,
        image: "images/product-1.jpg",
        stock: 50,
    },
    {
        id: 2,
        name: "name1",
        price: 50,
        image: "images/product-2.jpg",
        stock: 50,
    },
    {
        id: 3,
        name: "name1",
        price: 50,
        image: "images/product-3.jpg",
        stock: 50,
    },
    {
        id: 4,
        name: "name1",
        price: 50,
        image: "images/product-4.jpg",
        stock: 50,
    },
    {
        id: 5,
        name: "name1",
        price: 50,
        image: "images/product-5.jpg",
        stock: 50,
    },
    {
        id: 6,
        name: "name1",
        price: 50,
        image: "images/product-6.jpg",
        stock: 50,
    },
    {
        id: 7,
        name: "name1",
        price: 50,
        image: "images/product-7.jpg",
        stock: 50,
    },
];

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.post('/api/pay', (req, res) => {
    const ids = req.body;
    const productsCopy = products.map(p => ({...p }))
    ids.forEach(element => {
        const product = products.find(p => p.id === id);
        if (product.stock > 0) {
            product.stock--;
        } else {
            throw ("Sin Stock");
        }
    });
    const product = productsCopy;
    res.send(products);
});

app.use("/", express.static("FrontEnd"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});