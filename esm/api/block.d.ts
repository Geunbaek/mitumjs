import { Big, IP } from "../types";
declare function getBlocks(api: string | IP): Promise<any>;
declare function getBlockByHeight(api: string | IP, height: string | number | Big): Promise<any>;
declare function getBlockByHash(api: string | IP, hash: string): Promise<any>;
declare const _default: {
    getBlocks: typeof getBlocks;
    getBlockByHeight: typeof getBlockByHeight;
    getBlockByHash: typeof getBlockByHash;
};
export default _default;
