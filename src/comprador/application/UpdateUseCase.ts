import { comprador } from "../domain/Comprador"; 
import { Repository } from "../domain/Repository";

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    apellido: string,
    password: string,
    telefono: string
  ): Promise<comprador | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        nombre,
        apellido,
        password,
        telefono
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
