import { Catalogo } from "../domain/Catalogo";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly Repo: Repository) {}

  async run(): Promise<Catalogo[] | null> {
    try {
      const result = await this.Repo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
