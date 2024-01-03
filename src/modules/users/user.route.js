import express from 'express';
import {
  deleteUser,
  findAllUser,
  findOneUser,
  login,
  updateProfile,
  changePassword,
  createUser,
  register,
  findUserOrders,
  findOneOrder,
} from './user.controller.js';

import {
  protect,
  protectAccountOwner,
  restrictTo,
  validateExistUser,
} from './user.middleware.js';

export const router = express.Router();

router.post('/register', register);

router.post('/signup', createUser);

router.post('/login', login);


router.use(protect);

router.patch('/change-password', changePassword);

router.get('/', findAllUser);

router.patch('/:id', updateProfile)

router.delete('/:id', deleteUser)

router.get('/orders', findUserOrders)

router.get('/orders/:id', findOneOrder)

router
  .route('/:id')
  .get(restrictTo('admin'), validateExistUser, findOneUser)

  .delete(validateExistUser, protectAccountOwner, deleteUser);