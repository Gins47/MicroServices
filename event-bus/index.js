const express = require('express')
const BodyParser = require('body-parser')
const axios = require('axios')

const app = express();

app.use(BodyParser.json())

app.post('/events', async (req,res)=>{
 
    const event = req.body;

    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:4001/events',event);
    axios.post('http://localhost:4002/events',event);

    res.send({status:'OK'})

})

app.listen(4005,()=>{
    console.log("Event service listening at port 4005")
})