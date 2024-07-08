import { Product } from './product.interface';
import { ProductModel } from './product.model';

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

const deleteAProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

const updateSingleProduct = async (_id: string, product: Product) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id },
    { $set: product },
    { new: true },
  );

  return result;
};

const searchAProductInDB = async (searchTerm: string) => {
  const result = await ProductModel.find({ name: { $regex: searchTerm, $options: 'i' } });

  return result;
};


export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDB,
  updateSingleProduct,
  searchAProductInDB,
};
