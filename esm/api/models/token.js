import axios from "axios";
import { Address } from "../../key";
import { IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/token/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getToken(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getTokenBalance(api, contract, account, delegateIP) {
    const apiPath = `${url(api, contract)}/account/${Address.from(account).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getToken,
    getTokenBalance,
};
//# sourceMappingURL=token.js.map