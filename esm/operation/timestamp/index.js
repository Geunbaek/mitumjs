"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeStamp = void 0;
const create_service_1 = require("./create-service");
const append_1 = require("./append");
const base_1 = require("../base");
const api_1 = require("../../api");
const types_1 = require("../../types");
class TimeStamp extends base_1.ContractGenerator {
    constructor(networkID, api) {
        super(networkID, api);
    }
    createService(contractAddr, sender, currency) {
        return new base_1.Operation(this.networkID, new create_service_1.CreateServiceFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency));
    }
    append(contractAddr, sender, projectID, requestTimeStamp, data, currency) {
        const fact = new append_1.AppendFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, projectID, requestTimeStamp, data, currency);
        return new base_1.Operation(this.networkID, fact);
    }
    async getServiceInfo(contractAddr) {
        return await (0, api_1.getAPIData)(() => api_1.contract.timestamp.getService(this.api, contractAddr));
    }
    async getTimestampInfo(contractAddr, projectID, tid) {
        return await (0, api_1.getAPIData)(() => api_1.contract.timestamp.getTimeStamp(this.api, contractAddr, projectID, tid));
    }
}
exports.TimeStamp = TimeStamp;
//# sourceMappingURL=index.js.map