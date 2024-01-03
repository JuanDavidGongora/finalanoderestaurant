import { catchAsync } from "../../common/errors/catchAsync.js";
import { RestaurantService } from "./restaurant.service.js";



export const createRestaurant = catchAsync(async(req,res,next) => {
    const{name, address, rating} = req.body;

    const restaurant = await RestaurantService.createRestaurant({name, address, rating})

    return res.status(201).json(restaurant)
})
export const createReview = catchAsync(async(req,res,next) => {
    const { id } = req.params;
    const {comment, rating } = req.body;
    const { sessionUser } = req;

    const review = await RestaurantService.createReview({
        userId: sessionUser.id,
         comment,
         restaurantId: id
    })

    return res.status(201).json(review)
   

})
export const deleteReview = catchAsync(async(req,res,next) => {
    const { review } = req;

    await ReviewService.delete(review);
  
    return res.status(204).json();
})

export const updateReview = catchAsync(async(req,res,next) => {
    const { review } = req;
  const { hasError, errorMessages, petData } = validatePartialReview(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  await ReviewService.update(review, reviewData);

  return res.status(200).json({
    message: 'the review has been updated successfully!',
  });
  
})