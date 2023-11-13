"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types");
async function getNode(api) {
    return await axios_1.default.get(`${types_1.IP.from(api).toString()}/`);
}
exports.default = {
    getNode,
};
//# sourceMappingURL=node.js.map