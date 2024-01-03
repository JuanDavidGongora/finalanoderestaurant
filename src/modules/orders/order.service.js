import { User } from "../users/user.model.js";
import { Order } from "./order.model.js";


export class OrderService {
    static async findOne(id, status = "pending") {
      return await Order.findOne({
        where: {
          id,
          status: status,
        },
      });
    }
  
    static async findAll() {
      return await Order.findAll({
        where: {
          status: ["pending", "completed"],
        },
        include: [
          {
            model: User,
          },
        ],
      });
    }
  
    static async create(data) {
      return await Order.create(data);
    }
  
    static async update(order) {
      return await order.update({ status: "completed" });
    }
  
    static async delete(order) {
      return await order.update({ status: "cancelled" });
    }
  }