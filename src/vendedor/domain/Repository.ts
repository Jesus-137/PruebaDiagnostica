import { Vendedor } from "./Vendedor";

export interface Repository {
  getAll(): Promise<Vendedor[] | null>;
  login(
    nombre: string,
    password: string
  ):Promise<Vendedor[] | null>;
}
