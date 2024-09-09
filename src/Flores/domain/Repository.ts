import { Flores } from "./Flores";

export interface Repository {
  getAll(): Promise<Flores[] | null>;
  delete(userId: number): Promise<string | null>
  create(
    id:number,
    nombre: string,
    tipo: string,
    precio: number,
    cantidad_disponible: number
  ): Promise<Flores | null>;
  update(
    id:number,
    nombre: string,
    tipo: string,
    precio: number,
    cantidad_disponible: number
  ): Promise<Flores|null>;
}
