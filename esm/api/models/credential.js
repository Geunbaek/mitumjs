import axios from "axios";
import { Address } from "../../key";
import { IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/did/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getIssuer(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}/service`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getCredential(api, contract, templateID, credentialID, delegateIP) {
    const apiPath = `${url(api, contract)}/template/${templateID}/credential/${credentialID}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getTemplate(api, contract, templateID, delegateIP) {
    const apiPath = `${url(api, contract)}/template/${templateID}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getCredentials(api, contract, templateID, delegateIP) {
    const apiPath = `${url(api, contract)}/template/${templateID}/credentials`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getCredentialByHolder(api, contract, holder, delegateIP) {
    const apiPath = `${url(api, contract)}/holder/${Address.from(holder).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getIssuer,
    getCredential,
    getTemplate,
    getCredentials,
    getCredentialByHolder,
};
//# sourceMappingURL=credential.js.map