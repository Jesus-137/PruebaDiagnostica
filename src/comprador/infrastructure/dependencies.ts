// src/Clientes/infrastructure/dependencies.ts

import { MysqlcompradorRepository } from './adaptadores/MysqlClientesRepository';

import { CreateClientesUseCase } from '../application/CreateUseCase'; 
import { GetAllClientesUseCase } from '../application/GetAllUseCase'; 
import { GetByIdClienteUseCase } from '../application/DeliteUseCase'; 
import { UpdateClientesUseCase } from '../application/UpdateUseCase';

import { CreateClienteController } from './controllers/CreateController';
import { GetAllClientesController } from './controllers/GetAllController';
import { GetByIdClienteController } from './controllers/DeliteController';
import { UpdateController } from './controllers/UpdateController';

const mysqlClientesRepository = new MysqlcompradorRepository

const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
const getByIdClienteUseCase = new GetByIdClienteUseCase(mysqlClientesRepository);
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);

const createClienteController = new CreateClienteController(createClienteUseCase);
const getAllClientesController = new GetAllClientesController(getAllUseCase);
const getByIdClienteController = new GetByIdClienteController(getByIdClienteUseCase);
const updateController = new UpdateController(updateUsecase);

export {
  createClienteController,
  getAllClientesController,
  getByIdClienteController,
  updateController,
};
