import { comprador } from "../domain/Comprador";
import { Repository } from "../domain/Repository";

export class GetAllClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(): Promise<comprador[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
