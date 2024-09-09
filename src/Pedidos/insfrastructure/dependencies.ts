// src/Clientes/infrastructure/dependencies.ts

import { MysqlRepository } from './adaptadores/MysqlRepository';

import { CreateUseCase } from '../application/CreateUseCase'; 
import { GetAllUseCase } from '../application/GetAllUseCase'; 
import { DeleteUseCase } from '../application/DeleteUseCase';

import { CreateClienteController } from './controllers/CreateController';
import { GetAllClientesController } from './controllers/GetAllController';
import { DeleteController } from './controllers/DeleteController';

const mysqlClientesRepository = new MysqlRepository()

const createClienteUseCase = new CreateUseCase(mysqlClientesRepository);
const getAllUseCase = new GetAllUseCase(mysqlClientesRepository);
const deleteUseCase = new DeleteUseCase(mysqlClientesRepository);

const createClienteController = new CreateClienteController(createClienteUseCase);
const getAllClientesController = new GetAllClientesController(getAllUseCase);
const deleteController = new DeleteController(deleteUseCase);

export {
  createClienteController,
  getAllClientesController,
  deleteController,
};
