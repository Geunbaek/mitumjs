import axios from "axios";
import { Big, IP } from "../types";
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getBlocks(api, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/manifests`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getBlockByHeight(api, height, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/${Big.from(height).toString()}/manifest`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getBlockByHash(api, hash, delegateIP) {
    const apiPath = `${IP.from(api).toString()}/block/${hash}/manifest`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getBlocks,
    getBlockByHeight,
    getBlockByHash,
};
//# sourceMappingURL=block.js.map