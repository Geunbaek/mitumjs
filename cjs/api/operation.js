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
const key_1 = require("../key");
const types_1 = require("../types");
const delegateUri = (delegateIP) => `${types_1.IP.from(delegateIP).toString()}?uri=`;
function getOperations(api, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/block/operations`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getOperation(api, hash, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/block/operation/${hash}`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getBlockOperationsByHeight(api, height, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/block/${types_1.Big.from(height).toString()}/operations`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getBlockOperationsByHash(api, hash, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/block/${hash}/operations`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function getAccountOperations(api, address, delegateIP) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/account/${key_1.Address.from(address).toString()}/operations`;
        return !delegateIP ? yield axios_1.default.get(apiPath) : yield axios_1.default.get(delegateUri(delegateIP) + encodeURIComponent(apiPath));
    });
}
function send(api, operation, delegateIP, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `${types_1.IP.from(api).toString()}/builder/send`;
        return !delegateIP ? yield axios_1.default.post(apiPath, JSON.stringify(operation), config) : yield axios_1.default.post(delegateIP.toString(), operation, config);
    });
}
exports.default = {
    getOperations,
    getOperation,
    getBlockOperationsByHeight,
    getBlockOperationsByHash,
    getAccountOperations,
    send
};
//# sourceMappingURL=operation.js.map