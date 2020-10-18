const express = require('express')
const bodyParser=  require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())


const posts = {}

app.get('/post',(req,res)=>{
    console.log("called get post")

    res.send(posts)

})

app.post('/events',(req,res)=>{

    console.log("recieved event in query")

    const {type,data} = req.body

    if(type == "PostCreated"){

        const {id,title} = data;
        posts[id] = {id,title,comments:[]}


    }

    if(type == "CommentCreated"){
        const {id,content,postId,status} = data
        const post = posts[postId]
        post.comments.push({id,content,status})

    }

    if(type == "CommentUpdated"){
        const {id, content, postId, status } = data
        const post = posts[postId]
        const comment = post.comments.find(comment =>{
            return comment.id === id
        })

        comment.status = status
        comment.content = content
        

    }

    console.log(posts)
    res.send({})
})

app.listen(4006,()=>{
    console.log("Listening to 4006")
})

