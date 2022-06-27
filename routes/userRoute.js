import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controller/userController.js";
import multer from "multer";
import upload from "../config/multerConfig.js";
import express from "express";
const router = express.Router();
router.post("/", upload.array("image"), createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", upload.array("image"), updateUser);

export default router;
