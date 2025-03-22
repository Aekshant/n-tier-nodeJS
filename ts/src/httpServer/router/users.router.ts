import express from "express";
import { UserHandler } from "../controller/user.controller";

const router = express.Router();

router.post("/", UserHandler.create);
router.get("/:id", UserHandler.get);
router.put("/:id", UserHandler.update);
router.delete("/:id", UserHandler.delete);

export default router;


