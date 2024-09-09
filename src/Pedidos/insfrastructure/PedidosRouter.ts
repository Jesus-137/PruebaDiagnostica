// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { deleteController } from "./dependencies";

export const pedidosRouter = express.Router();

pedidosRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
pedidosRouter.delete(
  "/:id",
  deleteController.run.bind(deleteController)
);
pedidosRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
