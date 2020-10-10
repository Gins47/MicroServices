const express = require('express')
const  {randomBytes} =  require('crypto')
const bodyParser=  require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostID = {}

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostID[req.params.id] || [])
})

app.post('/posts/:id/comments',async(req,res)=>{
    const {content} = req.body
    console.log(JSON.stringify(req.params))
    const commentId = randomBytes(4).toString('hex')
    const comments = commentsByPostID[req.params.id] || []
    comments.push({id:commentId,content})
    commentsByPostID[req.params.id] = comments
    await axios.post('http://localhost:4005/events',{
        type:'CommentCreated',
        commentId,
        content
    })

    res.status(201).send(comments)
})

app.listen(4001,()=>{
    console.log("Comment app listening at 4001")
})