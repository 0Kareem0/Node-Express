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

    if (!isNaN(name)) {
        return res.status(400).json({ success: false, msg: `name cannot be a number` });
      }

      res.status(201).json({success:true,person:name})
}) 


app.post(`/api/postman/people`,(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:`please provide name value`})
    }
    res.status(201).send({success:true,data:[...people,name]})
})

app.post('/login',(req,res)=>{
const { name } = req.body    
if(name){
    return res.status(200).send(`Welcome ${name}`)
}

    res.status(401).send({success:false,msg:'Enter anything u dumb fuck'})
})



app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    let person = people.find((person) => person.id === Number(id))

    if (!person) {
        // If not found, create a new person
        person = { id: Number(id), name }
        people.push(person)
        return res.status(201).json({ success: true, msg: 'Person created', data: people })
    }

    // If found, update the name
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, msg: 'Person updated', data: newPeople })
})




app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
})