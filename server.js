const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

const products = [
    {
      id: '1',
      gender: 'Men',
      style: 'Pain Color / Red',
      size: 'XS',
      price: 400
    },
    {
      id: '2',
      gender: 'Men',
      style: 'Pain Color / Red',
      size: 'S',
      price: 400
    },
    {
      id: '3',
      gender: 'Men',
      style: 'Pain Color / Red',
      size: 'M',
      price: 290
    },
    {
        id: '4',
        gender: 'Men',
        style: 'Pain Color / Red',
        size: 'L',
        price: 400
      },
      {
        id: '5',
        gender: 'Men',
        style: 'Pain Color / Red',
        size: 'XL',
        price: 400
      },
      {
        id: '6',
        gender: 'Women',
        style: 'Plain Color / Black',
        size: 'XS',
        price: 290
      },
      {
        id: '7',
        gender: 'Women',
        style: 'Plain Color / Black',
        size: 'S',
        price: 400
      },
      {
        id: '8',
        gender: 'Women',
        style: 'Plain Color / Black',
        size: 'M',
        price: 400
      },
      {
        id: '9',
        gender: 'Women',
        style: 'Plain Color / Black',
        size: 'L',
        price: 290
      },
      {
        id: '10',
        gender: 'Women',
        style: 'Plain Color / Black',
        size: 'XL',
        price: 290
      }
];

const orders = [
  {
    id: '1',
    customers_id: '1001',
    delivery_address_id: '1111',
    startdate: Date,
    enddate: Date,
    status: 'On Shipping'
  },
  {
    id: '2',
    customers_id: '1002',
    delivery_address_id: '1112',
    startdate: Date,
    enddate: Date,
    status: 'On Shipping'
  },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/productsById/:id', (req, res) => {
    const { id } = req.params;
    const result = products.find((product) => product.id === id);
    res.json(result);
});

app.get('/productsByGender/:gender',(req, res) => {
    const { gender } = req.params;
    const result = products.find((product) => product.gender === gender);
    res.json(result);
});

app.get('/productsBySize/:size', (req, res) => {
    const { size } = req.params;
    const result = products.find((product) => product.size === size);
    res.json(result);
});

app.post('/postproduct', (req, res) => {
  const Postproducts = products.push(req.body)
  console.log('Post products Success')
  res.json(Postproducts)
})

app.post('/postaddress', (req, res) => {
  const Postorders = orders.push(req.body)
  console.log('Post Address Success')
  res.json(Postorders)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port,() =>{
    console.log("Server port: ", port)
})
