import { query } from "../../../database/mysql";
import { Vendedor } from "../../domain/Vendedor"; 
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async login(nombre: string, password: string): Promise<Vendedor[] | null> {
    const sql = "SELECT * FROM vendedor WHERE nombre=? and password=?;"
    const params: any[] = [nombre, password]
    try {
      const [result]: any = await query(sql, params);
      const vendedores = Object.values(JSON.parse(JSON.stringify(result)))
      return vendedores.map(
        (vendedor: any)=>
          new Vendedor(
            vendedor.id,
            vendedor.nombre,
            vendedor.apellido,
            vendedor.password,
            vendedor.telefono
          )
      );
    } catch (error) {
      return null
    }
  }

  async getAll(): Promise<Vendedor[] | null> {
    const sql = "SELECT nombre, telefono FROM vendedor;";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Vendedor(
            cliente.id,
            cliente.nombre,
            cliente.apellido,
            cliente.password,
            cliente.telefono
          )
      );
    } catch (error) {
      return null;
    }
  }
}
