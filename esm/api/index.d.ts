import { AxiosResponse } from "axios";
import account from "./account";
import block from "./block";
import node from "./node";
import operation from "./operation";
declare const currency: {
    getCurrencies: (api: string | import("../types").IP) => Promise<any>;
    getCurrency: (api: string | import("../types").IP, currency: string | import("../common").CurrencyID) => Promise<any>;
};
declare const contract: {
    nft: {
        getNFT: (api: string | import("../types").IP, contract: string | import("../key").Address, nftID: string | number | import("../types").Big) => Promise<any>;
        getNFTs: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getCollection: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getAccountOperators: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
    };
    credential: {
        getIssuer: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getCredential: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string, credentialID: string) => Promise<any>;
        getTemplate: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string) => Promise<any>;
        getCredentials: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string) => Promise<any>;
        getCredentialByHolder: (api: string | import("../types").IP, contract: string | import("../key").Address, holder: string | import("../key").Address) => Promise<any>;
    };
    dao: {
        getService: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getProposal: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string) => Promise<any>;
        getDelegator: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string, delegator: string | import("../key").Address) => Promise<any>;
        getVoter: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string, voter: string | import("../key").Address) => Promise<any>;
        getVotingResult: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string) => Promise<any>;
    };
    kyc: {};
    sto: {};
    timestamp: {
        getService: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getTimeStamp: (api: string | import("../types").IP, contract: string | import("../key").Address, projectID: string, tid: string | number | import("../types").Big) => Promise<any>;
    };
    token: {
        getToken: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getTokenBalance: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
    };
    point: {
        getPoint: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
        getPointBalance: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
    };
};
export { account, block, node, operation, currency, contract, };
declare const _default: {
    account: {
        getAccount: (api: string | import("../types").IP, address: string | import("../key").Address) => Promise<any>;
        getAccountByPublicKey: (api: string | import("../types").IP, publicKey: string | import("../key").Key) => Promise<any>;
    };
    block: {
        getBlocks: (api: string | import("../types").IP) => Promise<any>;
        getBlockByHeight: (api: string | import("../types").IP, height: string | number | import("../types").Big) => Promise<any>;
        getBlockByHash: (api: string | import("../types").IP, hash: string) => Promise<any>;
    };
    node: {
        getNode: (api: string | import("../types").IP) => Promise<any>;
    };
    operation: {
        getOperations: (api: string | import("../types").IP) => Promise<any>;
        getOperation: (api: string | import("../types").IP, hash: string) => Promise<any>;
        getBlockOperationsByHeight: (api: string | import("../types").IP, height: string | number | import("../types").Big) => Promise<any>;
        getBlockOperationsByHash: (api: string | import("../types").IP, hash: string) => Promise<any>;
        getAccountOperations: (api: string | import("../types").IP, address: string | import("../key").Address) => Promise<any>;
        send: (api: string | import("../types").IP, operation: string | import("../types").HintedObject, config?: {
            [i: string]: any;
        } | undefined) => Promise<any>;
    };
    currency: {
        getCurrencies: (api: string | import("../types").IP) => Promise<any>;
        getCurrency: (api: string | import("../types").IP, currency: string | import("../common").CurrencyID) => Promise<any>;
    };
    contract: {
        nft: {
            getNFT: (api: string | import("../types").IP, contract: string | import("../key").Address, nftID: string | number | import("../types").Big) => Promise<any>;
            getNFTs: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getCollection: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getAccountOperators: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
        };
        credential: {
            getIssuer: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getCredential: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string, credentialID: string) => Promise<any>;
            getTemplate: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string) => Promise<any>;
            getCredentials: (api: string | import("../types").IP, contract: string | import("../key").Address, templateID: string) => Promise<any>;
            getCredentialByHolder: (api: string | import("../types").IP, contract: string | import("../key").Address, holder: string | import("../key").Address) => Promise<any>;
        };
        dao: {
            getService: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getProposal: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string) => Promise<any>;
            getDelegator: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string, delegator: string | import("../key").Address) => Promise<any>;
            getVoter: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string, voter: string | import("../key").Address) => Promise<any>;
            getVotingResult: (api: string | import("../types").IP, contract: string | import("../key").Address, proposalID: string) => Promise<any>;
        };
        kyc: {};
        sto: {};
        timestamp: {
            getService: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getTimeStamp: (api: string | import("../types").IP, contract: string | import("../key").Address, projectID: string, tid: string | number | import("../types").Big) => Promise<any>;
        };
        token: {
            getToken: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getTokenBalance: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
        };
        point: {
            getPoint: (api: string | import("../types").IP, contract: string | import("../key").Address) => Promise<any>;
            getPointBalance: (api: string | import("../types").IP, contract: string | import("../key").Address, account: string | import("../key").Address) => Promise<any>;
        };
    };
};
export default _default;
export declare function getAPIData(f: () => Promise<AxiosResponse>): Promise<any>;
