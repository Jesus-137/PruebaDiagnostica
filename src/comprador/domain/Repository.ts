import { comprador } from "./Comprador";

export interface Repository {
  getAll(): Promise<comprador[] | null>;
  delete(userId: number): Promise<string | null>
  create(
    id:number,
    nombre: string,
    apellido: string,
    password: string,
    telefono: string
  ): Promise<comprador | null>;
  update(
    id:number,
    nombre: string,
    apellido: string,
    password: string,
    telefono: string
  ): Promise<comprador|null>;
}
