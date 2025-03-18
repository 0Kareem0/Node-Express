const express = require(`express`);
const app = express()
const port = 3000
const logger = require('./logger');
const authorize = require('./authorize');
const { products } = require('./data');

app.use([authorize,logger])

app.get('/',  (req , res)=>{ 
    res.send('Home Page')
})

app.get('/about',  (req , res)=>{
    res.send('About Page')
})

app.get('/api/products',  (req , res)=>{ 
    res.json(products)
})

app.get('/api/items',  (req , res)=>{
    console.log(req.user);
    res.send('items')
})

app.get('/api/products/:productID',  (req , res)=>{ 
    const { productID } = req.params
    const singleProduct = products.find(
        (product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
      } 

    return res.json(singleProduct)
    })


app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
})