declare const _default: {
    currency: {
        getCurrencies: (api: string | import("../../types").IP) => Promise<any>;
        getCurrency: (api: string | import("../../types").IP, currency: string | import("../../common").CurrencyID) => Promise<any>;
    };
    contract: {
        nft: {
            getNFT: (api: string | import("../../types").IP, contract: string | import("../../key").Address, nftID: string | number | import("../../types").Big) => Promise<any>;
            getNFTs: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getCollection: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getAccountOperators: (api: string | import("../../types").IP, contract: string | import("../../key").Address, account: string | import("../../key").Address) => Promise<any>;
        };
        credential: {
            getIssuer: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getCredential: (api: string | import("../../types").IP, contract: string | import("../../key").Address, templateID: string, credentialID: string) => Promise<any>;
            getTemplate: (api: string | import("../../types").IP, contract: string | import("../../key").Address, templateID: string) => Promise<any>;
            getCredentials: (api: string | import("../../types").IP, contract: string | import("../../key").Address, templateID: string) => Promise<any>;
            getCredentialByHolder: (api: string | import("../../types").IP, contract: string | import("../../key").Address, holder: string | import("../../key").Address) => Promise<any>;
        };
        dao: {
            getService: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getProposal: (api: string | import("../../types").IP, contract: string | import("../../key").Address, proposalID: string) => Promise<any>;
            getDelegator: (api: string | import("../../types").IP, contract: string | import("../../key").Address, proposalID: string, delegator: string | import("../../key").Address) => Promise<any>;
            getVoter: (api: string | import("../../types").IP, contract: string | import("../../key").Address, proposalID: string, voter: string | import("../../key").Address) => Promise<any>;
            getVotingResult: (api: string | import("../../types").IP, contract: string | import("../../key").Address, proposalID: string) => Promise<any>;
        };
        kyc: {};
        sto: {};
        timestamp: {
            getService: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getTimeStamp: (api: string | import("../../types").IP, contract: string | import("../../key").Address, projectID: string, tid: string | number | import("../../types").Big) => Promise<any>;
        };
        token: {
            getToken: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getTokenBalance: (api: string | import("../../types").IP, contract: string | import("../../key").Address, account: string | import("../../key").Address) => Promise<any>;
        };
        point: {
            getPoint: (api: string | import("../../types").IP, contract: string | import("../../key").Address) => Promise<any>;
            getPointBalance: (api: string | import("../../types").IP, contract: string | import("../../key").Address, account: string | import("../../key").Address) => Promise<any>;
        };
    };
};
export default _default;
