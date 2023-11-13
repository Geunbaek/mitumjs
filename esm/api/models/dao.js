"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/dao/${key_1.Address.from(contract).toString()}`;
async function getService(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}/service`);
}
async function getProposal(api, contract, proposalID) {
    return await axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}`);
}
async function getDelegator(api, contract, proposalID, delegator) {
    return await axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}/delegator/${key_1.Address.from(delegator).toString()}`);
}
async function getVoter(api, contract, proposalID, voter) {
    return await axios_1.default.get(`${url(api, contract)}/pproposal/${proposalID}/voter/${key_1.Address.from(voter).toString()}`);
}
async function getVotingResult(api, contract, proposalID) {
    return await axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}/votingpower`);
}
exports.default = {
    getService,
    getProposal,
    getDelegator,
    getVoter,
    getVotingResult,
};
//# sourceMappingURL=dao.js.map