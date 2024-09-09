// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { getByIdClienteController } from "./dependencies";
import { updateController } from "./dependencies";

export const floresRouter = express.Router();

floresRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
floresRouter.delete(
  "/:id",
  getByIdClienteController.run.bind(getByIdClienteController)
);
floresRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
floresRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
