import { Catalogo } from "./Catalogo";

export interface Repository {
  getAll(): Promise<Catalogo[] | null>;
  delete(userId: number): Promise<string | null>
  create(
    id:number,
    id_flor: number
  ): Promise<Catalogo | null>;
}
