"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIData = exports.contract = exports.currency = exports.operation = exports.node = exports.block = exports.account = void 0;
const account_1 = __importDefault(require("./account"));
exports.account = account_1.default;
const block_1 = __importDefault(require("./block"));
exports.block = block_1.default;
const node_1 = __importDefault(require("./node"));
exports.node = node_1.default;
const operation_1 = __importDefault(require("./operation"));
exports.operation = operation_1.default;
const models_1 = __importDefault(require("./models"));
const currency = models_1.default.currency;
exports.currency = currency;
const contract = models_1.default.contract;
exports.contract = contract;
exports.default = {
    account: account_1.default,
    block: block_1.default,
    node: node_1.default,
    operation: operation_1.default,
    currency,
    contract,
};
async function getAPIData(f) {
    const res = await f();
    if (res.status !== 200) {
        return null;
    }
    return res.data;
}
exports.getAPIData = getAPIData;
//# sourceMappingURL=index.js.map