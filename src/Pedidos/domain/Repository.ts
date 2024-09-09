import { Pedidos } from "./Pedidos";

export interface Repository {
  getAll(): Promise<Pedidos[] | null>;
  delete(userId: number): Promise<string | null>
  create(
    id:number,
    id_flor: number,
    id_comprador: number,
    cantidad: number
  ): Promise<Pedidos | null>;
}
