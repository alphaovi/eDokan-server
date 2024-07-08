import { Request, Response } from 'express';
import { ProductServices } from '../product.service';
import { productValidationSchema } from '../product.zod.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;

    // data validation using zod
    const zodValidateProduct = productValidationSchema.parse(product);

    // will call service function to send this data
    const result =
      await ProductServices.createProductIntoDB(zodValidateProduct);

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

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteAProductFromDB(productId);

    res.status(200).json({
      sucess: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: 'Products could not deleted successfully!',
      data: err,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updateProduct = req.body;
    const result = await ProductServices.updateSingleProduct(
      productId,
      updateProduct,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: { result },
    });
  } catch (err) {
    res.status(422).json({
      success: false,
      message: 'Products could not updated successfully!',
      data: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
