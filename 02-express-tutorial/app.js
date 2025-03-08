const express = require('express')
const app = express()
const path = require('path')
const port = 5000


app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


app.get('*', (req,res) =>{
    res.status(404).send('resource not found')
})


app.listen(port, () => {
    console.log('Server is listening on port 5000....');
    
})

console.log(path.resolve(__dirname, './navbar-app/index.html'));
