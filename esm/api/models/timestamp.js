import axios from "axios";
import { Address } from "../../key";
import { Big, IP } from "../../types";
const url = (api, contract) => `${IP.from(api).toString()}/timestamp/${Address.from(contract).toString()}`;
const delegateUri = (delegateIP) => `${IP.from(delegateIP).toString()}?uri=`;
async function getService(api, contract, delegateIP) {
    const apiPath = `${url(api, contract)}/service`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
async function getTimeStamp(api, contract, projectID, tid, delegateIP) {
    const apiPath = `${url(api, contract)}/project/${projectID}/id/${Big.from(tid).toString()}`;
    return !delegateIP ? await axios.get(apiPath) : await axios.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
}
export default {
    getService,
    getTimeStamp,
};
//# sourceMappingURL=timestamp.js.map