import { Vendedor } from "../domain/Vendedor";
import { Repository } from "../domain/Repository";

export class LoginUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    nombre: string,
    password: string
  ): Promise<Vendedor[] | null> {
    try {
      const result = await this.movimientoRepo.login(
        nombre,
        password
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
