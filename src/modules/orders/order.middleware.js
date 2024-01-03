import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { OrderService } from "./order.service.js";


export const validExistOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const order = await OrderService.findOne(id, "pending");

  if (!order) {
    return next(new AppError("order not found", 404));
  }

  req.order = order;
  next();
});