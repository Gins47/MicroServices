import express from 'express'

const router = express.Router()

router.post("/api/users/signout", (req: any, res: any) => {
    res.send("Hello world");
  });


  export {router as signoutUserRouter}