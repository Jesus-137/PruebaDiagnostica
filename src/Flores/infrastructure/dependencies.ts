import { MysqlFloresRepository } from './adaptadores/MysqlClientesRepository';
import { MysqlRepository } from '../../Catalogo/insfrastructure/adaptadores/MysqlRepository';

import { CreateClientesUseCase } from '../application/CreateUseCase'; 
import { GetAllClientesUseCase } from '../application/GetAllUseCase'; 
import { GetByIdClienteUseCase } from '../application/DeliteUseCase';
import { CreateUseCase } from '../../Catalogo/application/CreateUseCase'; 
import { UpdateClientesUseCase } from '../application/UpdateUseCase';

import { CreateClienteController } from './controllers/CreateController';
import { GetAllClientesController } from './controllers/GetAllController';
import { GetByIdClienteController } from './controllers/DeliteController';
import { UpdateController } from './controllers/UpdateController';

const mysqlClientesRepository = new MysqlFloresRepository()
const mysqlCatalogoRepository = new MysqlRepository()

const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
const getByIdClienteUseCase = new GetByIdClienteUseCase(mysqlClientesRepository);
const createUseCase = new CreateUseCase(mysqlCatalogoRepository)
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);

const createClienteController = new CreateClienteController(createClienteUseCase, createUseCase);
const getAllClientesController = new GetAllClientesController(getAllUseCase);
const getByIdClienteController = new GetByIdClienteController(getByIdClienteUseCase);
const updateController = new UpdateController(updateUsecase);

export {
  createClienteController,
  getAllClientesController,
  getByIdClienteController,
  updateController,
};
