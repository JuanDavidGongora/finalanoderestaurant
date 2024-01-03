import { catchAsync } from "../../common/errors/catchAsync.js";
import { OrderService } from "./order.service.js";



export const createOrder = catchAsync(async(req,res,next) => {
    const{quantity, mealId} = req.body;

    const order = await OrderService.createOrder({quantity,mealId})

    return res.status(201).json(order)
})
export const findUserOrders = catchAsync(async(req,res,next) => {
    const orders = await OrderService.findAll();

    return res.status(200).json(orders);
})
export const updateOrder = catchAsync(async(req,res,next) => {
    try {
        const { order } = req;
    
        const orderUpdated = await orderService.update(order);
    
        return res.status(200).json(orderUpdated);
      } catch (error) {
        return res.status(500).json({
          status: "fail",
          message: "Something went very wrong! 🧨",
        });
      }
})
export const deleteOrder = catchAsync(async(req,res,next) => {
    const { order } = req;

    await ReviewService.delete(order);
  
    return res.status(204).json();
})