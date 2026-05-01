import express, { Router } from 'express'
import { SpecialtyController } from './specialty.controller';

const router: Router = express.Router();

router.post('/', SpecialtyController.CreateSpecialty)
router.get('/', SpecialtyController.getAllSpecialties)
router.get('/:id', SpecialtyController.getAllSpecialties)
router.delete('/:id', SpecialtyController.deleteSpecialty)

export const SpecialtyRouters = router