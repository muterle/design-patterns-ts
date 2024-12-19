import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDbProduct from "../model/MongoDbProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  private static type: Db = Db.MONGODB;

  static create(): IDbProduct {
    switch (DbProductFactory.type) {
      case Db.MYSQL:
        return new MySQLProduct();
      case Db.MONGODB:
        return new MongoDbProduct();
      default:
        throw new Error("Banco de dados não suportado");
    }
  }
}
