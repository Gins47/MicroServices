import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-errors";
import jwt from "jsonwebtoken";
import { validationRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validationRequest,
  async (req: Request, res: Response) => {
  
    const { email, password } = req.body;
    console.log(`User creation email = ${email} password = ${password} `);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Email already in use");
      throw new BadRequestError("Email already in use");
    }

    const user = User.build({ email, password });
    await user.save();
    //Generate JWT webtoken

    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // Store JWT in the session Object
    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(user);
  }
);

export { router as signupUserRouter };
