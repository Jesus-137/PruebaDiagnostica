// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { getAllClientesController, loginController } from "./dependencies";

export const vendedorRouter = express.Router();

vendedorRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
vendedorRouter.post(
  'crear',
  
)
vendedorRouter.post(
  '/login',
  loginController.run.bind(loginController)
)
