import { Address } from "../../key";
import { IP } from "../../types";
declare function getToken(api: string | IP, contract: string | Address): Promise<any>;
declare function getTokenBalance(api: string | IP, contract: string | Address, account: string | Address): Promise<any>;
declare const _default: {
    getToken: typeof getToken;
    getTokenBalance: typeof getTokenBalance;
};
export default _default;
