"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../../types");
const common_1 = require("../../common");
async function getCurrencies(api) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/currency`);
}
async function getCurrency(api, currency) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/currency/${common_1.CurrencyID.from(currency).toString()}`);
}
exports.default = {
    getCurrencies,
    getCurrency,
};
//# sourceMappingURL=currency.js.map