import { Flores } from "../domain/Flores";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    tipo: string,
    precio: number,
    cantidad_disponible: number
  ): Promise<Flores | null> {
    try {
      const cliente = await this.movimientoRepo.create(
        id,
        nombre,
        tipo,
        precio,
        cantidad_disponible
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
