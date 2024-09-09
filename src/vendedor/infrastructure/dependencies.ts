// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';

import { GetAllClientesUseCase } from '../application/GetAllUseCase';

import { LoginUseCase } from '../application/LoginUseCase';

import { GetAllClientesController } from './controllers/GetAllController';
import { LoginController } from './controllers/LoginController';

const mysqlClientesRepository = new MysqlClientesRepository()

const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
const loginUseCase = new LoginUseCase(mysqlClientesRepository);

const getAllClientesController = new GetAllClientesController(getAllUseCase);
const loginController = new LoginController(loginUseCase);

export {
  getAllClientesController,
  loginController
};
