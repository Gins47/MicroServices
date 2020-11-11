import express from 'express'

const router = express.Router()

router.post("/api/users/signin", (req: any, res: any) => {
    res.send("Hello world");
  });


  export {router as signinUserRouter}