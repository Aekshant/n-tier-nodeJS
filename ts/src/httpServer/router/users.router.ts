import express from "express";
import { UserHandler } from "../controller/user.controller";

const router = express.Router();

router.post("/", UserHandler.create);
router.get("/", UserHandler.get);
router.get("/:id", UserHandler.getOne);
router.put("/:id", UserHandler.update);
router.delete("/:id", UserHandler.delete);

export default router;


