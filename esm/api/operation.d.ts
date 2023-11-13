import { Address } from "../key";
import { Big, HintedObject, IP } from "../types";
declare function getOperations(api: string | IP): Promise<any>;
declare function getOperation(api: string | IP, hash: string): Promise<any>;
declare function getBlockOperationsByHeight(api: string | IP, height: string | number | Big): Promise<any>;
declare function getBlockOperationsByHash(api: string | IP, hash: string): Promise<any>;
declare function getAccountOperations(api: string | IP, address: string | Address): Promise<any>;
declare function send(api: string | IP, operation: HintedObject | string, config?: {
    [i: string]: any;
}): Promise<any>;
declare const _default: {
    getOperations: typeof getOperations;
    getOperation: typeof getOperation;
    getBlockOperationsByHeight: typeof getBlockOperationsByHeight;
    getBlockOperationsByHash: typeof getBlockOperationsByHash;
    getAccountOperations: typeof getAccountOperations;
    send: typeof send;
};
export default _default;
