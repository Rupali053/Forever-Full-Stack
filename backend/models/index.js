// import { Sequelize, DataTypes } from 'sequelize';

// const sequelize = new Sequelize('ecommerce', 'root', 'rupali_2003', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// try {
//     await sequelize.authenticate();
//     console.log('✅ DB Connected');
// } catch (error) {
//     console.error('❌ DB Connection Failed:', error);
// }

// export { sequelize, DataTypes };











import { DataTypes } from "sequelize";
import { sequelize } from "../config/mongodb.js"; // Use updated path

import UserModel from "./userModel.js";
import ProductModel from "./productModel.js";
import OrderModel from "./orderModel.js";

const db = {};
db.sequelize = sequelize;
db.User = UserModel;
db.Product = ProductModel;
db.Order = OrderModel;

export default db;
