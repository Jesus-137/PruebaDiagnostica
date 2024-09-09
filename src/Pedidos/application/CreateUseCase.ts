import { Pedidos } from "../domain/Pedidos";
import { Repository } from "../domain/Repository";

export class CreateUseCase {
  constructor(readonly Repo: Repository) {}

  async run(
    id:number,
    id_flor: number,
    id_comprador: number,
    cantidad: number
  ): Promise<Pedidos | null> {
    try {
      const cliente = await this.Repo.create(
        id,
        id_flor,
        id_comprador,
        cantidad
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
