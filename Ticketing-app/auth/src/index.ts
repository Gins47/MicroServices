const express = require("express");
import 'express-async-errors'
import { json } from "body-parser";
import mongoose from 'mongoose'


// Routes
import {currentUserRouter} from './routes/current-user'
import {signinUserRouter} from './routes/signin'
import {signoutUserRouter} from './routes/signout'
import {signupUserRouter} from './routes/signup'

// Error Handlers

import {errorHandler} from './middlewares/error-handler'
import {NotFoundError} from './errors/not-found'


const app = express();
app.use(json());

// List of routers
app.use(currentUserRouter)
app.use(signinUserRouter)
app.use(signoutUserRouter)
app.use(signupUserRouter)

app.all('*',async()=>{
  throw new NotFoundError()
})

// middleware
app.use(errorHandler)

const start = async()=>{
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
