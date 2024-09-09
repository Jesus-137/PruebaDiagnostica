// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { getByIdClienteController } from "./dependencies";
import { updateController } from "./dependencies";

export const  compradorRouter = express.Router();

compradorRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
compradorRouter.delete(
  "/:id",
  getByIdClienteController.run.bind(getByIdClienteController)
);
compradorRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
compradorRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
