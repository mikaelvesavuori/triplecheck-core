/**
 * @description The abstract Repository sets out the overall methods that must exist on any concrete implementation.
 */
export abstract class Repository {
  abstract getData(key: string): Promise<any>;
  abstract updateData(key: string, data: any): Promise<void>;
  abstract deleteData(key: string): Promise<void>;
}
