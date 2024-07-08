import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/Product/product.route';
import { OrderRoutes } from './app/modules/Order/order.route';

const app: Application = express();

// const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application routes for products
app.use('/api/products', ProductRoutes);

// application routes for orders
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

console.log(process.cwd());

export default app;
