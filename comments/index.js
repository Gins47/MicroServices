const express = require('express')
const  {randomBytes} =  require('crypto')
const bodyParser=  require('body-parser')

const app = express()
app.use(bodyParser.json())

const commentsByPostID = {}

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostID[req.params.id] || [])
})

app.post('/posts/:id/comments',(req,res)=>{
    const {content} = req.body
    console.log(JSON.stringify(req.params))
    const commentId = randomBytes(4).toString('hex')
    const comments = commentsByPostID[req.params.id] || []
    comments.push({id:commentId,content})
    commentsByPostID[req.params.id] = comments
    res.status(201).send(comments)
})

app.listen(5000,()=>{
    console.log("Comment app listening at 5000")
})