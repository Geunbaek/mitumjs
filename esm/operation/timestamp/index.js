import { CreateServiceFact } from "./create-service";
import { AppendFact } from "./append";
import { ContractGenerator, Operation } from "../base";
import { contract, getAPIData } from "../../api";
import { TimeStamp as TS, URIString } from "../../types";
export class TimeStamp extends ContractGenerator {
    constructor(networkID, api, delegateIP) {
        super(networkID, api, delegateIP);
    }
    createService(contractAddr, sender, currency) {
        return new Operation(this.networkID, new CreateServiceFact(TS.new().UTC(), sender, contractAddr, currency));
    }
    append(contractAddr, sender, projectID, requestTimeStamp, data, currency) {
        new URIString(projectID, 'projectID');
        const fact = new AppendFact(TS.new().UTC(), sender, contractAddr, projectID, requestTimeStamp, data, currency);
        return new Operation(this.networkID, fact);
    }
    async getServiceInfo(contractAddr) {
        return await getAPIData(() => contract.timestamp.getService(this.api, contractAddr, this.delegateIP));
    }
    async getTimestampInfo(contractAddr, projectID, tid) {
        return await getAPIData(() => contract.timestamp.getTimeStamp(this.api, contractAddr, projectID, tid, this.delegateIP));
    }
}
//# sourceMappingURL=index.js.map