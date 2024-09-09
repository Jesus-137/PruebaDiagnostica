// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { deleteController } from "./dependencies";

export const catalogoRouter = express.Router();

catalogoRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
catalogoRouter.delete(
  "/:id",
  deleteController.run.bind(deleteController)
);
catalogoRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
