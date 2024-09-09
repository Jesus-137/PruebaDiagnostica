import { query } from "../../../database/mysql";
import { Pedidos } from "../../domain/Pedidos";
import { Repository } from "../../domain/Repository";

export class MysqlRepository implements Repository {
  async getAll(): Promise<Pedidos[] | null> {
    const sql = "SELECT * FROM pedidos";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Pedidos(
            cliente.id,
            cliente.id_flor,
            cliente.id_comprador,
            cliente.cantidad_pedida
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM pedidos where id=?";
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
    id_flor: number,
    id_comprador: number,
    cantidad: number
  ): Promise<Pedidos | null> {
    const sql =
"INSERT INTO pedidos (id_flor, id_comprador, cantidad_pedida) VALUES (?, ?, ?)";
    const params: any[] = [id_flor, id_comprador, cantidad];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      return new Pedidos(result.insertId, id_flor, id_comprador, cantidad);
    } catch (error) {
      return null;
    }
  }
}
