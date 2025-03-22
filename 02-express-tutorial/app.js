const express = require(`express`);
const app = express()
const port = 3000
let { people } = require(`./data`)
const logger = require('./logger');



app.disable('etag');
app.disable('x-powered-by');

app.use(logger)
app.use(express.static(`./methods-public`))

app.use(express.urlencoded({extended:false}))

app.get(`/api/people`, (req ,res)=>{
res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{

    res.send('loging....')
})

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
})