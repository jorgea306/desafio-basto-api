import { Router } from "express";
const router = Router();
import * as AnimalCtrl from '../controllers/animals/animals.controllers.js'


router.get('/animals', AnimalCtrl.getAnimals);

router.get('/animals/:id', AnimalCtrl.getAnimal);

router.post('/animals', AnimalCtrl.createAnimal);

router.delete('/animals/:id', AnimalCtrl.deleteAnimal);

router.put('/animals/:id', AnimalCtrl.updateAnimal);

export default router