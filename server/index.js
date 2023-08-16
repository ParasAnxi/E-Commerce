import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

import corsOptions from './configuration/corsOptions.js';

import authRoutes from './routes/auth.js';
import itemRoutes from './routes/item.js';
import cartRoutes from './routes/cart.js';
import brandRoutes from './routes/brand.js';
import categoryRoutes from './routes/category.js';

/*Configurations*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/*Routes*/
app.use('/auth',authRoutes);
app.use('/items',itemRoutes);
app.use('/cart',cartRoutes);
app.use('/brands',brandRoutes);
app.use('/categories',categoryRoutes);

/*Mongoose Data base*/

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running at PORT ${PORT}!`);
    });
}).catch((error)=>console.log(error.message));
