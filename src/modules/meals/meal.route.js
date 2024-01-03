import express from 'express';
import { protect, protectAccountOwner } from '../users/user.middleware.js';
import { validExistMeal } from './meal.middleware.js';
import {
  createMeal,
  deleteMeal,
  findAllMeals,
  findOneMeal,
  updateMeal,
} from './meal.controller.js';

export const router = express.Router();

router.use(protect);

router.post('/:id', createMeal);
router.get('/', findAllMeals);
router.get('/:id', findOneMeal);
router.patch('/:id', updateMeal);
router.delete('/:id', deleteMeal, validExistMeal, protectAccountOwner);
