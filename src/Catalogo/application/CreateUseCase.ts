import { Catalogo } from "../domain/Catalogo";
import { Repository } from "../domain/Repository";

export class CreateUseCase {
  constructor(readonly Repo: Repository) {}

  async run(
    id:number,
    id_flor: number
  ): Promise<Catalogo | null> {
    try {
      const cliente = await this.Repo.create(
        id,
        id_flor,
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
