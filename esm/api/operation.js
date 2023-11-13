"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../key");
const types_1 = require("../types");
async function getOperations(api) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/operations`);
}
async function getOperation(api, hash) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/operation/${hash}`);
}
async function getBlockOperationsByHeight(api, height) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/${types_1.Big.from(height).toString()}/operations`);
}
async function getBlockOperationsByHash(api, hash) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/${hash}/operations`);
}
async function getAccountOperations(api, address) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/account/${key_1.Address.from(address).toString()}/operations`);
}
async function send(api, operation, config) {
    return await axios_1.default.post(`${types_1.IP.from(api).toString()}/builder/send`, JSON.stringify(operation), config);
}
exports.default = {
    getOperations,
    getOperation,
    getBlockOperationsByHeight,
    getBlockOperationsByHash,
    getAccountOperations,
    send,
};
//# sourceMappingURL=operation.js.map