import axios from "axios";
import { Address } from "../../key";
import { IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/sto/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getService(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getPartitions(api, contract, holder, delegateIP) {
    const apiPath = `${url(api, contract)}/holder/${Address.from(holder).toString()}/partitions`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getBalanceByHolder(api, contract, holder, partition, delegateIP) {
    const apiPath = `${url(api, contract)}/holder/${Address.from(holder).toString()}/partition/${partition}/balance`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getOperatorsByHolder(api, contract, holder, partition, delegateIP) {
    const apiPath = `${url(api, contract)}/holder/${Address.from(holder).toString()}/partition/${partition}/operators`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getPartitionBalance(api, contract, partition, delegateIP) {
    const apiPath = `${url(api, contract)}/partition/${partition}/balance`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getAuthorized(api, contract, operator, delegateIP) {
    const apiPath = `${url(api, contract)}/operator/${Address.from(operator).toString()}/holders`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getService,
    getPartitions,
    getBalanceByHolder,
    getOperatorsByHolder,
    getPartitionBalance,
    getAuthorized,
};
//# sourceMappingURL=sto.js.map