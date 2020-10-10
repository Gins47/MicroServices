const express = require('express')
const  {randomBytes} =  require('crypto')
const bodyParser=  require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.post('/posts',async (req,res)=>{
    console.log("called post creation")
    const {title} = req.body
    const id = randomBytes(4).toString('hex')
    posts[id] = {
        id,
        title
    }
   await axios.post('http://localhost:4005/events',{
       type:'PostCreated',
       data:{
           id,
           title
       }
   })

   res.status(201).send(posts[id])
})

app.get('/posts',(req,res)=>{

    res.send(posts)

})

app.listen(4000,()=>{
    console.log("App listening at port 4000")
})