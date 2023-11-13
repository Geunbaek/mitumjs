"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.Node = exports.Config = exports.NetworkID = exports.Version = void 0;
const config_1 = require("./config");
Object.defineProperty(exports, "Version", { enumerable: true, get: function () { return config_1.Version; } });
Object.defineProperty(exports, "NetworkID", { enumerable: true, get: function () { return config_1.NetworkID; } });
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return config_1.Config; } });
const api_1 = require("../api");
const types_1 = require("../types");
const error_1 = require("../error");
class Node extends types_1.Generator {
    constructor(api) {
        super("", api);
    }
    async getNodeInfo() {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.node.getNode(this.api);
    }
}
exports.Node = Node;
class Block extends types_1.Generator {
    constructor(api) {
        super("", api);
    }
    async getAllBlocks() {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.block.getBlocks(this.api);
    }
    async getBlockByHash(hash) {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.block.getBlockByHash(this.api, hash);
    }
    async getBlockByHeight(height) {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.block.getBlockByHeight(this.api, height);
    }
    async getOperationsByHash(hash) {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.operation.getBlockOperationsByHash(this.api, hash);
    }
    async getOperationsByHeight(height) {
        error_1.Assert.check(this.api !== undefined || this.api !== null, error_1.MitumError.detail(error_1.ECODE.NO_API, "no api"));
        return await api_1.operation.getBlockOperationsByHeight(this.api, height);
    }
}
exports.Block = Block;
//# sourceMappingURL=index.js.map