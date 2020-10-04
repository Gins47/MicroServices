const express = require('express')
const  {randomBytes} =  require('crypto')
const bodyParser=  require('body-parser')

const app = express()

app.use(bodyParser.json())

const posts = {}

app.post('/post',(req,res)=>{
    const {title} = req.body
    const id = randomBytes(4).toString('hex')
    posts[id] = {
        id,
        title
    }
   res.status(201).send(posts[id])
})

app.get('/posts',(req,res)=>{

    res.send(posts)

})

app.listen(4000,()=>{
    console.log("App listening at port 4000")
})