import { Version, NetworkID, Config, RangeConfig } from "./config";
import { Generator, IP } from "../types";
export { Version, NetworkID, Config, RangeConfig, };
export declare class Node extends Generator {
    constructor(api?: string | IP);
    getNodeInfo(): Promise<any>;
}
export declare class Block extends Generator {
    constructor(api?: string | IP);
    getAllBlocks(): Promise<any>;
    getBlockByHash(hash: string): Promise<any>;
    getBlockByHeight(height: number | string): Promise<any>;
    getOperationsByHash(hash: string): Promise<any>;
    getOperationsByHeight(height: number | string): Promise<any>;
}
