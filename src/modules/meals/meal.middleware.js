import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { MealService } from "./meal.service.js";


export const validExistMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await MealService.findOne(id, "active");

  if (!meal) {
    return next(new AppError("meal not found", 404));
  }

  req.meal = meal;
  next();
});