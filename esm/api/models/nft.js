"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/nft/${key_1.Address.from(contract).toString()}`;
async function getNFT(api, contract, nftID) {
    return await axios_1.default.get(`${url(api, contract)}/${nftID}`);
}
async function getNFTs(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}/nfts`);
}
async function getCollection(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}/collection`);
}
async function getAccountOperators(api, contract, account) {
    return await axios_1.default.get(`${url(api, contract)}/account/${key_1.Address.from(account).toString()}/operators`);
}
exports.default = {
    getNFT,
    getNFTs,
    getCollection,
    getAccountOperators,
};
//# sourceMappingURL=nft.js.map