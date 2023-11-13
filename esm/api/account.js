"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types");
const key_1 = require("../key");
async function getAccount(api, address) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/account/${key_1.Address.from(address).toString()}`);
}
async function getAccountByPublicKey(api, publicKey) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/accounts?publickey=${key_1.Key.from(publicKey).toString()}`);
}
exports.default = {
    getAccount,
    getAccountByPublicKey,
};
//# sourceMappingURL=account.js.map