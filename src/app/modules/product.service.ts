import { Product } from './product.interface';
import { ProductModel } from './Product/product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);

  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const deleteAProductFromDB = async (_id:string) => {
  const result = await ProductModel.updateOne({_id}, {isDeleted: true});
  return result;
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDB
};
