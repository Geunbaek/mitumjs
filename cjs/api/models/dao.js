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
const delegateUri = (delegateIP) => `${types_1.IP.from(delegateIP).toString()}?uri=`;
function getService(api, contract, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${url(api, contract)}/service`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getProposal(api, contract, proposalID, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${url(api, contract)}/proposal/${proposalID}`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getDelegator(api, contract, proposalID, delegator, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${url(api, contract)}/proposal/${proposalID}/delegator/${key_1.Address.from(delegator).toString()}`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getVoter(api, contract, proposalID, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${url(api, contract)}/proposal/${proposalID}/voter`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getVotingResult(api, contract, proposalID, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${url(api, contract)}/proposal/${proposalID}/votingpower`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
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