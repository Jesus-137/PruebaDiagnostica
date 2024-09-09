import { Repository } from "../domain/Repository";

export class DeleteUseCase {
  constructor(readonly Repo: Repository) {}

  async run(id: number): Promise<string | null> {
    try {
      const result = await this.Repo.delete(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
