import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { Biker } from "./../models/biker.js";
import dotenv from "dotenv";
dotenv.config();
function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: 3600 });
}

export const login = (req, res) => {
  const { email, password, type } = req.body;
  // define user type
  let collection;
  if (type == "Biker") {
    collection = Biker;
  } else if (type == "User") {
    collection = User;
  }
  collection
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((result) => {
          if (result) {
            const token = createToken(user.id);
            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: 1000 * 3600,
              // secure: true,
            });
            res.status(201).json({ userId: user.id });
          } else {
            res.status(500).json({ message: "incorrect password" });
          }
        });
      } else {
        res.status(401).json({ message: "invalid e-mail" });
      }
    })
    .catch((e) => {
      res.status(401).send(e);
    });
};
export async function signup(req, res) {
  const newUser = {
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
  };
  // password hashing
  const salt = await bcrypt.genSalt();
  newUser.password = await bcrypt.hash(newUser.password, salt);
  // define user type
  const type = req.body.type;
  let collection;
  if (type == "Biker") {
    collection = Biker;
  } else if (type == "User") {
    collection = User;
  }
  collection
    .create(newUser)
    .then(() => {
      const token = createToken(newUser.id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 3600,
      });
      res.status(201).json({ userId: newUser.id });
    })
    .catch((e) => {
      let message = e.errors[0].message;
      res.status(400).json(message);
    });
}
export const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    maxAge: 1,
    // secure: true,
  });
  res.redirect("/login");
};
