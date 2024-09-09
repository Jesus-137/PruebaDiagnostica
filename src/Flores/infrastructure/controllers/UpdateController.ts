import { Request, Response } from 'express';
import { UpdateClientesUseCase } from '../../application/UpdateUseCase';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); // Usar almacenamiento en memoria para Multer
console.log(upload)

export class UpdateController {
  constructor(
    private readonly updateClientesUseCase: UpdateClientesUseCase
  ) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const cliente = await this.updateClientesUseCase.run(
        data.id,
        data.nombre,
        data.tipo,
        data.precio,
        data.cantidad_disponible
      );

      if (cliente) {
        return res.status(201).send({
          status: 'success',
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            tipo: cliente.tipo,
            precio: cliente.precio,
            cantidad_disponible: cliente.cantidad_disponible
          }
        });
      } else {
        return res.status(204).send({
          status: 'error',
          data: 'No fue posible actualizar el registro'
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        data: 'Ocurrió un error en la actualización',
        msn: error
      });
    }
  }
}
