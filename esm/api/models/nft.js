import axios from "axios";
import { Address } from "../../key";
import { IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/nft/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getNFT(api, contract, nftID, delegateIP) {
    const apiPath = `${url(api, contract)}/${nftID}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getNFTs(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}/nfts`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getCollection(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}/collection`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getAccountOperators(api, contract, account, delegateIP) {
    const apiPath = `${url(api, contract)}/account/${Address.from(account).toString()}/operators`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getNFT,
    getNFTs,
    getCollection,
    getAccountOperators,
};
//# sourceMappingURL=nft.js.map