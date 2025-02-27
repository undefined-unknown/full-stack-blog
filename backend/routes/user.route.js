import express from "express";
import { getUserSavePosts, savePost } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/saved", getUserSavePosts);
router.patch("/save", savePost);

export default router;
