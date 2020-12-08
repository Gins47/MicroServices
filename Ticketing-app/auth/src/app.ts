const express = require("express");
import 'express-async-errors'
import { json } from "body-parser";
import cookieSession from 'cookie-session'

// Routes
import {currentUserRouter} from './routes/current-user'
import {signinUserRouter} from './routes/signin'
import {signoutUserRouter} from './routes/signout'
import {signupUserRouter} from './routes/signup'

// Error Handlers

import {errorHandler} from './middlewares/error-handler'
import {NotFoundError} from './errors/not-found'


const app = express();
app.set('trust proxy',true)
app.use(json());
app.use(cookieSession({
  signed:false,
  secure:false
}))

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

export {app}