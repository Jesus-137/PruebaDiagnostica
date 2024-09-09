import { query } from "../../../database/mysql";
import { Catalogo } from "../../domain/Catalogo";
import { Repository } from "../../domain/Repository";

export class MysqlRepository implements Repository {
  async getAll(): Promise<Catalogo[] | null> {
    const sql = "SELECT * FROM catalogo";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Catalogo(
            cliente.id,
            cliente.id_flor
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM catalogo where id=?";
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
    id_flor: number
  ): Promise<Catalogo | null> {
    const sql =
"INSERT INTO catalogo (id_flor) VALUES (?)";
    const params: any[] = [id_flor];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      return new Catalogo(result.insertId, id_flor);
    } catch (error) {
      return null;
    }
  }
}
