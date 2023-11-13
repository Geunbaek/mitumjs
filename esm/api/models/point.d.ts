import { Address } from "../../key";
import { IP } from "../../types";
declare function getPoint(api: string | IP, contract: string | Address): Promise<any>;
declare function getPointBalance(api: string | IP, contract: string | Address, account: string | Address): Promise<any>;
declare const _default: {
    getPoint: typeof getPoint;
    getPointBalance: typeof getPointBalance;
};
export default _default;
