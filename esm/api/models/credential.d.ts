import { Address } from "../../key";
import { IP } from "../../types";
declare function getIssuer(api: string | IP, contract: string | Address): Promise<any>;
declare function getCredential(api: string | IP, contract: string | Address, templateID: string, credentialID: string): Promise<any>;
declare function getTemplate(api: string | IP, contract: string | Address, templateID: string): Promise<any>;
declare function getCredentials(api: string | IP, contract: string | Address, templateID: string): Promise<any>;
declare function getCredentialByHolder(api: string | IP, contract: string | Address, holder: string | Address): Promise<any>;
declare const _default: {
    getIssuer: typeof getIssuer;
    getCredential: typeof getCredential;
    getTemplate: typeof getTemplate;
    getCredentials: typeof getCredentials;
    getCredentialByHolder: typeof getCredentialByHolder;
};
export default _default;
