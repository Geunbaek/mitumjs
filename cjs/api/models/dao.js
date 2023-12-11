"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/dao/${key_1.Address.from(contract).toString()}`;
function getService(api, contract) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${url(api, contract)}/service`);
    });
}
function getProposal(api, contract, proposalID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}`);
    });
}
function getDelegator(api, contract, proposalID, delegator) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}/delegator/${key_1.Address.from(delegator).toString()}`);
    });
}
function getVoter(api, contract, proposalID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}/voter`);
    });
}
function getVotingResult(api, contract, proposalID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${url(api, contract)}/proposal/${proposalID}/votingpower`);
    });
}
exports.default = {
    getService,
    getProposal,
    getDelegator,
    getVoter,
    getVotingResult,
};
//# sourceMappingURL=dao.js.map