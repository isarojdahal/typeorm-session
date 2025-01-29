import express from "express";
import UserController from "../controllers/user/User.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const createdUser = await UserController.createUser();
  res.json({data:createdUser})
  
});

router.get("/", async (req, res) => {
  const users = await UserController.getUsers();
  res.json({ data: users });
});

router.get("/:id", async (req, res) => {
  const user = await UserController.getOneUser(req.params.id);
  res.json({ data: user });
});

router.put("/:id", async (req, res) => {
  const data = await UserController.updateUser(req.params.id);
  res.json({ data });
});

router.delete("/:id", async (req, res) => {
  const data = await UserController.deleteUser(req.params.id);
  res.json({ data });
});

router.get("/misc/token", async (req, res) => {
  const data = await UserController.misc();
  res.json({ data });
});

export default router;
