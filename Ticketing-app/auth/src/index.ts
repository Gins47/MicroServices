const express = require("express");
import { json } from "body-parser";
import {currentUserRouter} from './routes/current-user'
import {signinUserRouter} from './routes/signin'
import {signoutUserRouter} from './routes/signout'
import {signupUserRouter} from './routes/signup'

const app = express();
app.use(json());

// List of routers
app.use(currentUserRouter)
app.use(signinUserRouter)
app.use(signoutUserRouter)
app.use(signupUserRouter)


// Starting the app
app.listen(3000, () => {
  console.log("Started auth express at port 3000");
});
