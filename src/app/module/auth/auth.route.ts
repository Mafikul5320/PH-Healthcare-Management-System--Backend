import express, { Router } from "express";
import { AuthController } from "./auth.controller";

const router: Router = express.Router()

router.post("/register", AuthController.registerPatient)
router.post("/signin", AuthController.signIn)

export const AuthRouters = router