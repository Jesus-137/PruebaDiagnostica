import { Request, Response } from "express";

import { DeleteUseCase } from "../../application/DeleteUseCase";

export class DeleteController {
  constructor(readonly getByIdClienteUseCase: DeleteUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const cliente = await this.getByIdClienteUseCase.run(id);

      if (cliente)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: cliente,
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
