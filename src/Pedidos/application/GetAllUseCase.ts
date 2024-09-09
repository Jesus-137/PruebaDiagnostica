import { Pedidos } from "../domain/Pedidos";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly Repo: Repository) {}

  async run(): Promise<Pedidos[] | null> {
    try {
      const result = await this.Repo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
