import { Request, Response } from 'express';
import { orderValidation } from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const validateOrder = orderValidation.parse(order);
    const result = await OrderServices.createSingleOrder(validateOrder);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Order could not created successfully',
      data: err,
    });
  }
};

const getOrders = async(req: Request, res: Response) => {
    
    try{
        const result = await OrderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            count: result.length,
            data: {result},
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: "Orders couldn't find",
            data: {err}
        })

    }
};

const getOrdersByMail = async(req: Request, res: Response) => {
    try{
        const email = req.query.email as string;
        const result = await OrderServices.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email",
            data: {result},
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: "Orders couldn't find using email",
            data: {err}
        })
    }
}


export const OrderControllers = {
    createOrder,
    getOrders,
    getOrdersByMail
}