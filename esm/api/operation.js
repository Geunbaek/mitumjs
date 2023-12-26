import axios from "axios";
import { Address } from "../key";
import { Big, IP } from "../types";
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getOperations(api, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/operations`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getOperation(api, hash, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/operation/${hash}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getBlockOperationsByHeight(api, height, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/${Big.from(height).toString()}/operations`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getBlockOperationsByHash(api, hash, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/${hash}/operations`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getAccountOperations(api, address, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/account/${Address.from(address).toString()}/operations`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function send(api, operation, delegateIP, config) {
    const apiPath = `${IP.from(api).toString()}/builder/send`;
    return !delegateIP ? await axios.post(apiPath, JSON.stringify(operation), config) : await axios.post(delegateIP.toString(), operation, config);
}
export default {
    getOperations,
    getOperation,
    getBlockOperationsByHeight,
    getBlockOperationsByHash,
    getAccountOperations,
    send
};
//# sourceMappingURL=operation.js.map