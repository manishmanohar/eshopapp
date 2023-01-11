const express = require('express');
const fs = require('fs');
const app = express();

const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

function appendFile(filename, new_data) {
    fs.readFile(filename, (err, data) => {
        if (err) console.log(err);

        data = JSON.parse(data);
        data.push(new_data);

        fs.writeFile(filename, JSON.stringify(data), err => {
            if (err) console.log(err);
            else console.log("Added");
        });
    });
}

app.post('/login', (req, res) => {
    const buffer = fs.readFileSync('./users.json');
    const users = JSON.parse(buffer.toString());

    for (user of users) {
        if (user.email == req.body.email && user.password == req.body.password) {
            return res.status(200).json({
                isAdmin: user.isAdmin,
                email: user.email
            });
        }
    }

    return res.status(403).json({ message: "Unauthenticated" });
});

app.get('/addresses/:email', (req, res) => {
    const buffer = fs.readFileSync('./addresses.json');
    const addresses = JSON.parse(buffer.toString());

    for (let address of addresses) {
        if (address.email == req.params.email) {
            return res.status(200).json({
                name: address.name,
                number: address.number,
                street: address.street,
                city: address.city,
                state: address.state,
                landmark: address.landmark,
                zipcode: address.zipcode
            });
        }
    }
    return res.status(200).json({
        name: "",
        number: "",
        street: "",
        city: "",
        state: "",
        landmark: "",
        zipcode:""
    })
});

app.put('/addresses/add', (req, res) => {

});

app.post('/signup', (req, res) => {

    const data = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        isAdmin: false,
    };

    appendFile('./users.json', data);
    return res.status(200).json({ message: "OK" });
});

app.post('/products', (req, res) => {

    const data = {
        "image": req.body.image,
        "title": req.body.title,
        "price": req.body.price,
        "description": req.body.description
    }
    appendFile('./products.json', data);

    return res.status(200).json({ message: "OK" });
});

app.get('/products', (req, res) => {
    const buffer = fs.readFileSync('./products.json');
    const products = JSON.parse(buffer.toString());

    return res.status(200).json(products);
});


app.get('/product/:id', (req, res) => {
    const buffer = fs.readFileSync('./products.json');
    const products = JSON.parse(buffer.toString());

    for(let product of products) {
        if (product.id == req.params.id) {
            return res.status(200).json({product});
        }
    }
    return res.status(200).json({product: {
            id: 0,
            title: "Not Found",
            price: "0"
        }});
});

app.get('/categories', (req, res) => {
    const buffer = fs.readFileSync('./categories.json');
    const categories = JSON.parse(buffer.toString());

    return res.status(200).json(categories);
});

app.post('/orders/place', (req, res) => {
    const data = {
        productId: req.body.id,
        quantity: req.body.quantity,
        price: req.body.price,
        total: req.body.total,
        username: req.body.username
    };

    appendFile('./orders.json', data);

    return res.status(200).json({message: "OK"});
});

app.listen(3001, () => {
    console.log("E-Shop server running at port 3001");
});
