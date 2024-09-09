import { Request, Response } from "express";

import { LoginUseCase } from "../../application/LoginUseCase";

export class LoginController {
  constructor(readonly loginUseCase: LoginUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const clientes = await this.loginUseCase.run(
        data.nombre,
        data.password
      );
      if (clientes)
        res.status(200).send(clientes.map((cliente: any) => {
            return {
              status: "A iniciado sesion corectamente"
            };
          }),
        );
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
