"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/timestamp/${key_1.Address.from(contract).toString()}`;
async function getService(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}/service`);
}
async function getTimeStamp(api, contract, projectID, tid) {
    return await axios_1.default.get(`${url(api, contract)}/project/${projectID}/id/${types_1.Big.from(tid).toString()}`);
}
exports.default = {
    getService,
    getTimeStamp,
};
//# sourceMappingURL=timestamp.js.map