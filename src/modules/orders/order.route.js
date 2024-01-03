import express from 'express';
import {
  createOrder,
  deleteOrder,
  findUserOrders,
  updateOrder,
} from './order.controller.js';
import { validExistOrder } from './order.middleware.js';
import { protect, protectAccountOwner } from '../users/user.middleware.js';

export const router = express.Router();

router.use(protect);

router.post('/', createOrder);
router.get('/me', findUserOrders);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder, validExistOrder, protectAccountOwner);
