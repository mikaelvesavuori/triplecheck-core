export declare abstract class Repository {
    abstract getData(key: string): Promise<any>;
    abstract updateData(key: string, data: any): Promise<void>;
    abstract deleteData(key: string): Promise<void>;
}
