import { Request, Response } from 'express';
import { ProductServices } from '../product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;

    // will call service function to send this data
    const result = await ProductServices.createProductIntoDB(product);

    // send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: { result },
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: 'Products could not created successfully!',
      data: err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      sucess: true,
      message: 'Products fetched successfully!',
      count: result.length,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: 'Products could not fetched successfully!',
      data: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      sucess: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: 'Products could not fetched successfully!',
      data: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};