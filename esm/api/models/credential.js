"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key_1 = require("../../key");
const types_1 = require("../../types");
const url = (api, contract) => `${types_1.IP.from(api).toString()}/did/${key_1.Address.from(contract).toString()}`;
async function getIssuer(api, contract) {
    return await axios_1.default.get(`${url(api, contract)}/service`);
}
async function getCredential(api, contract, templateID, credentialID) {
    return await axios_1.default.get(`${url(api, contract)}/template/${templateID}/credential/${credentialID}`);
}
async function getTemplate(api, contract, templateID) {
    return await axios_1.default.get(`${url(api, contract)}/template/${templateID}`);
}
async function getCredentials(api, contract, templateID) {
    return await axios_1.default.get(`${url(api, contract)}/template/${templateID}/credentials`);
}
async function getCredentialByHolder(api, contract, holder) {
    return await axios_1.default.get(`${url(api, contract)}/holder/${key_1.Address.from(holder).toString()}`);
}
exports.default = {
    getIssuer,
    getCredential,
    getTemplate,
    getCredentials,
    getCredentialByHolder,
};
//# sourceMappingURL=credential.js.map