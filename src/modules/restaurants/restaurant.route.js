import express from 'express';
import {
  createRestaurant,
  createReview,
  deleteReview,
  updateReview,
} from './restaurant.controller.js';
import {
  validExistRestaurant,
  validExistReview,
} from './restaurant.middleware.js';
import { protect, protectAccountOwner } from '../users/user.middleware.js';

export const router = express.Router();

router.use(protect);

router.route('/').post(createRestaurant);

router.post('/reviews/:id', validExistRestaurant, createReview);

router
  .route('/reviews/:restaurantId/:id')
  .patch(updateReview)
  .delete(
    validExistRestaurant,
    validExistReview,
    protectAccountOwner,
    deleteReview
  );
