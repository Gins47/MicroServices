const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events',async (req,res)=>{
    
    const {id,data} = req.body;
    console.log(data)
    const {content,postId,status} = data;
    const newStatus = content.includes('orange') ? 'rejected' : 'approved'

   await axios.post('http://localhost:4005/events',{
       type:'CommentModerated',
       data:{
           id,
           content,
           postId,
           status : newStatus
       }
   })

    res.send({})

})

app.listen(4003,()=>{
    console.log("App is running in the port 4003")
})

