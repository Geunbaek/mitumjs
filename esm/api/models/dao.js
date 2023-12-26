import axios from "axios";
import { Address } from "../../key";
import { IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/dao/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getService(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}/service`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getProposal(api, contract, proposalID, delegateIP) {
    const apiPath = `${url(api, contract)}/proposal/${proposalID}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getDelegator(api, contract, proposalID, delegator, delegateIP) {
    const apiPath = `${url(api, contract)}/proposal/${proposalID}/delegator/${Address.from(delegator).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getVoter(api, contract, proposalID, delegateIP) {
    const apiPath = `${url(api, contract)}/proposal/${proposalID}/voter`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getVotingResult(api, contract, proposalID, delegateIP) {
    const apiPath = `${url(api, contract)}/proposal/${proposalID}/votingpower`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getService,
    getProposal,
    getDelegator,
    getVoter,
    getVotingResult,
};
//# sourceMappingURL=dao.js.map