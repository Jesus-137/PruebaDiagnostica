import { query } from "../../../database/mysql";
import { Flores } from "../../domain/Flores";
import { Repository } from "../../domain/Repository";

export class MysqlFloresRepository implements Repository {
  async update(id:number, nombre: string, tipo: string, precio: number, cantidad_disponible: number): Promise<Flores | null> {
    const sql = "UPDATE flores SET nombre=?, tipo=?, precio=?, cantidad_disponible=? WHERE id=?";
    const params: any[] = [nombre, tipo, precio, cantidad_disponible, id];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return new Flores(id, nombre, tipo, precio, cantidad_disponible);
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }
  async getAll(): Promise<Flores[] | null> {
    const sql = "SELECT * FROM flores";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Flores(
            cliente.id,
            cliente.nombre,
            cliente.tipo,
            cliente.precio,
            cliente.cantidad_disponible
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM flores where id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);
      return 'Se eliminó correctamente'
    } catch (error) {
      return null;
    }
  }

  async create(
    id:number,
    nombre: string,
    tipo: string,
    precio: number,
    cantidad_disponible: number
  ): Promise<Flores | null> {
    const sql =
"INSERT INTO flores (nombre, tipo, precio, cantidad_disponible) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, tipo, precio, cantidad_disponible];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      return new Flores(result.insertId, nombre, tipo, precio, cantidad_disponible);
    } catch (error) {
      return null;
    }
  }
}
