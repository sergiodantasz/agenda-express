import { Router } from "express"
import { index } from "../controllers/home.controller.js"

const router = Router()

router.get("/", index)

export default router
