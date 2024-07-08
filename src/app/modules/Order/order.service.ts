import { Order } from "./order.interface";
import { OrderModel } from "./order.model"


const createSingleOrder = async(order: Order) => {
    const result = await OrderModel.create(order);
    return result;
};


const getAllOrders = async () => {
    const result = await OrderModel.find();
    return result;
};


const getOrdersByEmail = async (email: string) => {
    const result = await OrderModel.find({email: email});
    return result;
}




export const OrderServices = {
    createSingleOrder,
    getAllOrders,
    getOrdersByEmail
}