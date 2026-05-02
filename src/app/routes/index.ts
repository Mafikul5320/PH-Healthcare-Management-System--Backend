import express, { Router } from "express"
import { SpecialtyRouters } from "../module/specialty/specialty.route";
import { AuthRouters } from "../module/auth/auth.route";


const router: Router = express.Router();

router.use('/specialty', SpecialtyRouters)
router.use("/auth", AuthRouters)
router.use("/auth", AuthRouters)
export const indexRoutes = router