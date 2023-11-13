"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/token/${key_1.Address.from(contract).toString()}`;
async function getToken(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}`);
}
async function getTokenBalance(api, contract, account) {
    return await axios_1.default.get(`${url(api, contract)}/account/${key_1.Address.from(account).toString()}`);
}
exports.default = {
    getToken,
    getTokenBalance,
};
//# sourceMappingURL=token.js.map