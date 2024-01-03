import { catchAsync } from "../../common/errors/catchAsync.js";
import { MealService } from "./meal.service.js";


export const createMeal = catchAsync(async(req,res,next) => {
    const{name, price} = req.body;

    const meal = await MealService.createMeal({name, price})

    return res.status(201).json(order)
})
export const findAllMeals = catchAsync(async(req,res,next) => {
    const meals = await MealService.findAll();

    return res.status(200).json(meals);

})
export const findOneMeal = catchAsync(async(req,res,next) => {
    const { meal } = req;

    return res.status(200).json(meal);

})
export const updateMeal = catchAsync(async(req,res,next) => {

    try {
        const { meal } = req;
    
        const mealUpdated = await mealService.update(meal);
    
        return res.status(200).json(mealUpdated);
      } catch (meal) {
        return res.status(500).json({
          status: "fail",
          message: "Something went very wrong! 🧨",
        });
      }

})
export const deleteMeal = catchAsync(async(req,res,next) => {
    const { meal } = req;

    await ReviewService.delete(meal);
  
    return res.status(204).json();
})