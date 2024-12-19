import IDbProduct from "./IDbProduct";

export default class MongoDbProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDB: Exibindo dados do produto ${productId}`;
  }
}
