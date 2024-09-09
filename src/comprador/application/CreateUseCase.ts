import { comprador } from "../domain/Comprador";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    apellido: string,
    password: string,
    telefono: string
  ): Promise<comprador | null> {
    try {
      const cliente = await this.movimientoRepo.create(
        id,
        nombre,
        apellido,
        password,
        telefono
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
