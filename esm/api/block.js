"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types");
async function getBlocks(api) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/manifests`);
}
async function getBlockByHeight(api, height) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/${types_1.Big.from(height).toString()}/manifest`);
}
async function getBlockByHash(api, hash) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/block/${hash}/manifest`);
}
exports.default = {
    getBlocks,
    getBlockByHeight,
    getBlockByHash,
};
//# sourceMappingURL=block.js.map