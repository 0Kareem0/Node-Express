const express = require(`express`)
const app = express ()
const { products } = require(`./data`)
const port = 5000

app.get(`/` , (req , res) =>{
    res.send(products)
})


app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
    
})