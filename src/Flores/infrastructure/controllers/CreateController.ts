import { Request, Response } from "express";
import { CreateClientesUseCase } from "../../application/CreateUseCase";
import { CreateUseCase } from "../../../Catalogo/application/CreateUseCase";

export class CreateClienteController {
  constructor (
    readonly createUseCase: CreateClientesUseCase,
    readonly createCatalogoUseCase: CreateUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const cliente = await this.createUseCase.run(
        data.id,
        data.nombre,
        data.tipo,
        data.precio,
        data.cantidad_disponible
      );
      if (cliente){
        const catalogo = await this.createCatalogoUseCase.run(cliente.id, cliente.id)
        if(catalogo){
          res.status(201).send({
            status: "success",
            data: {
              id: cliente.id,
              nombre: cliente.nombre,
              tipo: cliente.tipo,
              precio: cliente.precio,
              cantidad_disponible: cliente.cantidad_disponible
            },
          });
          console.log('Registro exitoso')
        }
        else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
      }
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
