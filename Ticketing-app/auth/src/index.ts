
import mongoose from 'mongoose'

import {app} from './app'


const start = async()=>{

  // check for the secret

if(!process.env.JWT_KEY){
  throw new Error('JWT_KEY must be defined')
}

  try{
    await mongoose.connect('mongodb://auth-mongo-mongodb:27017/auth',{
      useNewUrlParser:true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log("MongoDB connection established successfully")

  }catch(err){
    console.log(err)
  }
  // Starting the app
  app.listen(3000, () => {
    console.log("Started auth express at port 3000");
  });
}

start()
