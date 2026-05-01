import express, { Router } from "express"
import { SpecialtyRouters } from "../module/specialty/specialty.route";


const router: Router = express.Router();

router.use('/specialty', SpecialtyRouters)

export const indexRoutes = router