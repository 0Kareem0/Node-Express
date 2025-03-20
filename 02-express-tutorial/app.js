const express = require(`express`);
const app = express()
const port = 3000
let { people } = require(`./data`)

app.disable('etag');
app.disable('x-powered-by');

app.use(express.static(`./methods-public`))

app.get(`/api/people`, (req ,res)=>{
res.status(200).json({success:true,data:people})
})


app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`);
})