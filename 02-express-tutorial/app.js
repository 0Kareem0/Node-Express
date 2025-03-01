const express = require('express');
const app = express()
const port = 5000

app.get('/', (req,res) =>{
    res.status(200).send('Home Page')
    console.log('user hit the homePage');
})


app.get('/about', (req,res) =>{
    res.status(200).send('Home About')
    console.log('user hit the aboutPage');
})


app.all('*', (req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
    console.log('resource not found');
})


app.listen(port,() => {
    console.log(`Server is listening on port ${port}...`);
})