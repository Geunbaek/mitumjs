import { Address } from "../../key";
import { IP } from "../../types";
declare function getService(api: string | IP, contract: string | Address): Promise<any>;
declare function getProposal(api: string | IP, contract: string | Address, proposalID: string): Promise<any>;
declare function getDelegator(api: string | IP, contract: string | Address, proposalID: string, delegator: string | Address): Promise<any>;
declare function getVoter(api: string | IP, contract: string | Address, proposalID: string, voter: string | Address): Promise<any>;
declare function getVotingResult(api: string | IP, contract: string | Address, proposalID: string): Promise<any>;
declare const _default: {
    getService: typeof getService;
    getProposal: typeof getProposal;
    getDelegator: typeof getDelegator;
    getVoter: typeof getVoter;
    getVotingResult: typeof getVotingResult;
};
export default _default;
