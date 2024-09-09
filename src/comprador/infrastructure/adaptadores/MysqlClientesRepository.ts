import { query } from "../../../database/mysql";
import { comprador } from "../../domain/Comprador";
import { Repository } from "../../domain/Repository";

export class MysqlcompradorRepository implements Repository {
  async update(id:number, nombre: string, apellido: string, password: string, telefono: string): Promise<comprador | null> {
    const sql = "UPDATE comprador SET nombre=?, apellido=?, password=?, telefono=? WHERE id=?";
    const params: any[] = [nombre, apellido, password, telefono, id];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return new comprador(id, nombre, apellido, password, telefono);
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }
  async getAll(): Promise<comprador[] | null> {
    const sql = "SELECT * FROM comprador";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new comprador(
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

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM comprador where id=?";
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
    apellido: string,
    password: string,
    telefono: string
  ): Promise<comprador | null> {
    const sql =
"INSERT INTO comprador (nombre, apellido, password, telefono) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, apellido, password, telefono];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      return new comprador(result.insertId, nombre, apellido, password, telefono);
    } catch (error) {
      return null;
    }
  }
}
