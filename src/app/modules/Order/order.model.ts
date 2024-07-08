import { model, Schema } from "mongoose";
import { Order } from "./order.interface";


const orderSchema = new Schema<Order>({
    email: String,
    productId: String,
    price: Number,
    quantity: Number,
});

export const OrderModel = model<Order>("Order", orderSchema);