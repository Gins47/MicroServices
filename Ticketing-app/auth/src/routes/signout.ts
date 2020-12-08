import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req: any, res: any) => {
  req.session = null;
  res.send({});
});

export { router as signoutUserRouter };
