import { Flores } from "../domain/Flores"; 
import { Repository } from "../domain/Repository";

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    tipo: string,
    precio: number,
    cantidad_disponible: number
  ): Promise<Flores | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        nombre,
        tipo,
        precio,
        cantidad_disponible
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
