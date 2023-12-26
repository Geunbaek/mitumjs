import axios from "axios";
import { IP } from "../types";
import { Address, Key } from "../key";
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getAccount(api, address, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/account/${Address.from(address).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getAccountByPublicKey(api, publicKey, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/accounts?publickey=${Key.from(publicKey).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getAccount,
    getAccountByPublicKey,
};
//# sourceMappingURL=account.js.map