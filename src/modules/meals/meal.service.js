import { User } from "../users/user.model.js";
import { Meal } from "./meal.model.js";



export class MealService {
    static async findOne(id, status = "active") {
      return await Meal.findOne({
        where: {
          id,
          status: status,
        },
      });
    }
  
    static async findAll() {
      return await Meal.findAll({
        where: {
          status: ["active"],
        },
        include: [
          {
            model: User,
          },
        ],
      });
    }
  
    static async create(data) {
      return await Meal.create(data);
    }
  
    static async update(meal) {
      return await meal.update({ status: "active" });
    }
  
    static async delete(meal) {
      return await meal.update({ status: "active" });
    }
  }