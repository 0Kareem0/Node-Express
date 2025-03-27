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

app.use(express.json())
app.get(`/api/people`, (req ,res)=>{
res.status(200).json({success:true,data:people})
})

app.post(`/api/people`,(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:`please provide name value`})
    }
      res.status(201).json({success:true,person:name})
})

app.post('/login',(req,res)=>{
const { name } = req.body    
if(name){
    return res.status(200).send(`Welcome ${name}`)
}
    res.status(401).send('Enter anything u dumb fuck')
})

console.log(process.env);
console.log("hello");



app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
})